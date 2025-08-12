n.d(t, {
    I: () => E,
    S: () => S,
}),
    n(997841);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(533800),
    o = n(442837),
    u = n(755721),
    d = n(481060),
    c = n(484614),
    g = n(914010),
    h = n(246946),
    m = n(626135),
    p = n(630388),
    v = n(971130),
    x = n(530436),
    I = n(245335),
    f = n(981631),
    j = n(388032),
    N = n(652631),
    _ = n(881488);
let S = o.ZP.connectStores([h.Z], () => ({ hideValue: h.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: r, disabled: s } = e;
        return (0, l.jsx)(c.Z, {
            value: t,
            hideMessage: i ? j.intl.string(j.t["6HzNgY"]) : null,
            buttonColor: u.zx.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: s,
        });
    }),
    E = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: r,
                onClose: o,
                modalState: u,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: h,
                copyValue: E,
                changePage: b,
                inviteChannel: T,
                source: O,
                code: y,
                guildScheduledEvent: C,
                disabled: P,
                application: Z,
            } = e,
            { maxAge: w, maxUses: A, networkError: M, showVanityURL: R, flags: k } = u,
            D = i.useCallback(() => {
                m.default.track(f.rMx.COPY_INSTANT_INVITE, {
                    server: g.Z.getGuildId(),
                    channel: null == T ? void 0 : T.id,
                    channel_type: null == T ? void 0 : T.type,
                    location: O,
                    code: y,
                    guild_scheduled_event_id: null == C ? void 0 : C.id,
                    application_id: null == Z ? void 0 : Z.id,
                });
            }, [null == Z ? void 0 : Z.id, T, O, y, C]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(S, {
                    value: E,
                    autoFocus: r,
                    onCopy: D,
                    disabled: P,
                }),
                c &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", { className: N.divider }),
                            (0, l.jsx)(d.j7V, {
                                className: N.toggle,
                                value: (0, p.yE)(k, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => h((0, p.mB)(k, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: P,
                                hideBorder: !0,
                                children: (0, l.jsxs)("div", {
                                    className: N.formText,
                                    children: [
                                        (0, l.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            children: j.intl.string(j.t["1i1bUl"]),
                                        }),
                                        (0, l.jsx)(d.ua7, {
                                            text: j.intl.string(j.t["jvd/LC"]),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    d.d3s,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    (l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = l);
                                                                });
                                                        }
                                                        return e;
                                                    })(
                                                        {
                                                            size: "xs",
                                                            color: "currentColor",
                                                        },
                                                        e,
                                                    ),
                                                ),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                n || R
                    ? null
                    : (0, l.jsxs)(d.Text, {
                          variant: "text-xs/normal",
                          className: s()(_.marginTop8, N.footerText),
                          children: [
                              (0, v.Vg)(w, A),
                              " ",
                              r
                                  ? (0, l.jsx)(d.eee, {
                                        onClick: () => b(I.RV.SETTINGS),
                                        children: j.intl.string(j.t.VNe8Pz),
                                    })
                                  : null,
                          ],
                      }),
                !n && r && R
                    ? (0, l.jsxs)(d.Text, {
                          variant: "text-xs/normal",
                          className: s()(_.marginTop8, N.footerText),
                          children: [j.intl.string(j.t["0M2U9/"]), " "],
                      })
                    : null,
                null != M
                    ? (0, l.jsx)(x.W, {
                          guild: t,
                          error: M,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
