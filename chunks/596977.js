(n.d(t, { L0: () => I, uE: () => A }), n(321073), n(667532));
var i = n(91242),
    r = n(112420),
    a = n(276983),
    s = n(423976),
    l = n(17742),
    o = n(652215);
function d(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let c = {
    [o.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = d(i.id);
                          (null != t && n.push(t), e(i.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [o.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: d(e.args.title),
    }),
    [o.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: d(e.args.url),
    }),
    [o.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: d(e.args.preview_title) ?? d(e.args.content),
    }),
    [o.e$_.REQUEST_DEVICE_PERMISSIONS]: (e) => {
        let t = Array.isArray(e.args.permissions) ? e.args.permissions.filter((e) => "string" == typeof e) : [];
        return {
            result: { permissions: t.map((e) => ({ permission: e, state: "denied" })) },
            answered: "denied; an agent may not grant device access",
            options: t,
        };
    },
    [o.e$_.CAPTURE_SCREEN]: () => ({
        result: { status: "permission_denied" },
        answered: "denied; an agent may not capture the screen",
    }),
    [o.e$_.SELECT_VOICE_CHANNEL]: (e) => ({
        result: null,
        answered: "not joined; an agent may not move the user in or out of voice",
        subject: d(e.args.channel_id),
    }),
    [o.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [o.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [o.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [o.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [o.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [o.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [o.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [o.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [o.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(c);
let u = { drain: () => [], end: () => {}, iframeId: null },
    _ = [];
function E(e) {
    let t = _.find((t) => t.iframeId === e.iframeId),
        n =
            (function (e) {
                if (e.cmd !== o.e$_.CAPTURE_SCREEN && e.cmd !== o.e$_.GET_DEVICE_PERMISSIONS) return null;
                let t = i.A.getFrameByIframeId(e.iframeId)?.applicationId;
                return null != t && (0, l.fX)(t)
                    ? e.cmd === o.e$_.CAPTURE_SCREEN
                        ? { result: (0, l.ng)(t), answered: "returned the selected game capture" }
                        : {
                              result: {
                                  permissions: a.jQ.map((e) =>
                                      "screen_capture" === e ? { permission: e, state: "granted" } : (0, s.Cp)(t, e),
                                  ),
                              },
                              answered: "screen capture allowed for the selected game capture",
                          }
                    : null;
            })(e) ?? (null != t ? (c[e.cmd]?.(e) ?? null) : null);
    if (null == n) return null;
    let { result: r, answered: d, options: u, subject: E } = n;
    return (
        null != t &&
            e.cmd !== o.e$_.GET_DEVICE_PERMISSIONS &&
            t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: d,
                ...(null != u && u.length > 0 ? { options: u } : {}),
                ...(null != E ? { subject: E } : {}),
            }),
        { result: r }
    );
}
function A(e, t) {
    if (null == e) return u;
    let n = { iframeId: e, recorded: [] };
    return (
        t?.beneathBatches === !0 ? _.push(n) : _.unshift(n),
        f(),
        {
            iframeId: e,
            drain: () => n.recorded.splice(0, n.recorded.length),
            end: () => {
                let e = _.indexOf(n);
                -1 !== e && (_.splice(e, 1), f());
            },
        }
    );
}
let h = 0;
function f() {
    (0, r.C)(_.length > 0 || h > 0 ? E : null);
}
function I() {
    (h++, f());
    let e = !1;
    return () => {
        e || ((e = !0), h--, f());
    };
}
