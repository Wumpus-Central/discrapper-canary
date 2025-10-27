n.d(t, {
    Wf: () => R,
    ZP: () => D,
    wz: () => P,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(28664),
    s = n(755721),
    l = n(481060),
    c = n(555573),
    u = n(10718),
    d = n(895924),
    f = n(124072),
    _ = n(665906),
    p = n(695346),
    h = n(592125),
    m = n(703558),
    g = n(496675),
    E = n(944486),
    b = n(585483),
    y = n(981631),
    O = n(689079),
    v = n(761652),
    I = n(388032);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t, n, i, a) {
    if (null == e) return;
    let o = () => {
        let r = h.Z.getChannel(e);
        if (null == r) return;
        let { command: o, application: s } = u.Xq(
            {
                channel: r,
                type: "channel",
            },
            n,
            a,
        );
        if (null != o && o.untranslatedName === t) {
            var l, f;
            b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != s
                    ? {
                          type: d.Qi.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: null != (f = null == s || null == (l = s.bot) ? void 0 : l.username) ? f : s.name,
                          application: s,
                      }
                    : null;
            c.Po({
                channelId: e,
                command: null,
                section: null,
            }),
                c.Po({
                    channelId: e,
                    command: o,
                    section: t,
                    location: i,
                });
        }
    };
    "" !== m.Z.getDraft(e, m.d.ChannelMessage)
        ? (0, l.h7j)((t) =>
              (0, r.jsx)(
                  l.ConfirmModal,
                  C(
                      S(
                          {
                              header: I.intl.string(I.t.pe26Cj),
                              confirmText: I.intl.string(I.t.VkKicb),
                              cancelText: I.intl.string(I.t["ETE/oC"]),
                              onConfirm: () => o(),
                              confirmButtonColor: s.zx.Colors.BRAND,
                              onCloseCallback: () => {
                                  b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                              },
                          },
                          t,
                      ),
                      {
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              children: I.intl.string(I.t["+awCIy"]),
                          }),
                      },
                  ),
              ),
          )
        : o();
}
function R(e) {
    var t;
    let { node: n, stateKey: o, children: s } = e,
        l = (0, a.e7)([h.Z, E.Z], () => {
            var e;
            return h.Z.getChannel(null != (e = n.channelId) ? e : E.Z.getChannelId());
        }, [n.channelId]),
        { hasSendMessagePerm: c, hasUseAppCommandsPerm: m } = (0, a.cj)([g.Z], () => ({
            hasSendMessagePerm: g.Z.can(y.Plq.SEND_MESSAGES, l),
            hasUseAppCommandsPerm: g.Z.can(y.Plq.USE_APPLICATION_COMMANDS, l),
        })),
        b =
            void 0 !== l
                ? {
                      type: "channel",
                      channel: l,
                  }
                : { type: "contextless" },
        { command: I } = u.YZ(b, null != (t = n.commandKey) ? t : ""),
        T = p.dN.useSetting(),
        S = i.useMemo(() => {
            if (null == I || null == l || I.untranslatedName !== n.commandName || T) return !1;
            let e = l.isPrivate();
            if ((0, _.xl)(l) || (!e && !c)) return !1;
            let t = (null == I ? void 0 : I.applicationId) === O.bi.BUILT_IN;
            return !!e || !!t || !!m;
        }, [l, I, c, m, n.commandName, T]),
        A = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(),
                    null != l &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        N(l.id, n.commandName, n.commandKey, d.Vh.MENTION);
            },
            [l, n.commandKey, n.commandName],
        );
    return S
        ? (0, r.jsxs)(
              f.Z,
              {
                  role: "link",
                  onClick: A,
                  children: [v.GI, s],
              },
              o,
          )
        : (0, r.jsxs)("span", {
              children: [v.GI, s],
          });
}
function P(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: c } = e,
        u = (0, a.e7)([E.Z], () => E.Z.getChannelId()),
        f = (e) => {
            null == e || e.stopPropagation(), N(u, n, t, d.Vh.POPULAR_COMMANDS, s), null == c || c(t);
        };
    return (0, r.jsx)(o.u, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.Button, {
            size: "sm",
            variant: "secondary",
            onClick: f,
            text: "".concat(v.GI).concat(n),
        }),
    });
}
function D(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(R, {
                node: e,
                stateKey: n.key,
                children: t(e.content, n),
            }),
    };
}
