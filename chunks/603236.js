n.d(t, {
    I: () => T,
    S: () => w,
}),
    n(997841);
var o = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    _ = n(533800),
    l = n(442837),
    d = n(755721),
    s = n(481060),
    c = n(484614),
    b = n(914010),
    u = n(246946),
    g = n(626135),
    h = n(630388),
    v = n(971130),
    p = n(530436),
    x = n(245335),
    m = n(981631),
    C = n(388032),
    I = n(451964),
    f = n(197571);
let w = l.ZP.connectStores([u.Z], () => ({ hideValue: u.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: a, disabled: r } = e;
        return (0, o.jsx)(c.Z, {
            value: t,
            hideMessage: i ? C.intl.string(C.t["6HzNgY"]) : null,
            buttonColor: d.zx.Colors.BRAND,
            onCopy: a,
            autoFocus: n,
            disabled: r,
        });
    }),
    T = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: l,
                modalState: d,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: u,
                copyValue: T,
                changePage: S,
                inviteChannel: j,
                source: N,
                code: O,
                guildScheduledEvent: y,
                disabled: R,
                application: k,
            } = e,
            { maxAge: P, maxUses: A, networkError: B, showVanityURL: L, flags: E } = d,
            F = i.useCallback(() => {
                g.default.track(m.rMx.COPY_INSTANT_INVITE, {
                    server: b.Z.getGuildId(),
                    channel: null == j ? void 0 : j.id,
                    channel_type: null == j ? void 0 : j.type,
                    location: N,
                    code: O,
                    guild_scheduled_event_id: null == y ? void 0 : y.id,
                    application_id: null == k ? void 0 : k.id,
                });
            }, [null == k ? void 0 : k.id, j, N, O, y]);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(w, {
                    value: T,
                    autoFocus: a,
                    onCopy: F,
                    disabled: R,
                }),
                c &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)("div", { className: I.divider }),
                            (0, o.jsx)(s.j7V, {
                                className: I.toggle,
                                value: (0, h.yE)(E, _.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => u((0, h.mB)(E, _.$.IS_APPLICATION_BYPASS, e)),
                                disabled: R,
                                hideBorder: !0,
                                children: (0, o.jsxs)("div", {
                                    className: I.formText,
                                    children: [
                                        (0, o.jsx)(s.Text, {
                                            variant: "text-md/semibold",
                                            children: C.intl.string(C.t["1i1bUl"]),
                                        }),
                                        (0, o.jsx)(s.ua7, {
                                            text: C.intl.string(C.t["jvd/LC"]),
                                            children: (e) =>
                                                (0, o.jsx)(
                                                    s.d3s,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                o = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (o = o.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                o.forEach(function (t) {
                                                                    var o;
                                                                    (o = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: o,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = o);
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
                n || L
                    ? null
                    : (0, o.jsxs)(s.Text, {
                          variant: "text-xs/normal",
                          className: r()(f.marginTop8, I.footerText),
                          children: [
                              (0, v.Vg)(P, A),
                              " ",
                              a
                                  ? (0, o.jsx)(s.eee, {
                                        onClick: () => S(x.RV.SETTINGS),
                                        children: C.intl.string(C.t.VNe8Pz),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && L
                    ? (0, o.jsxs)(s.Text, {
                          variant: "text-xs/normal",
                          className: r()(f.marginTop8, I.footerText),
                          children: [C.intl.string(C.t["0M2U9/"]), " "],
                      })
                    : null,
                null != B
                    ? (0, o.jsx)(p.W, {
                          guild: t,
                          error: B,
                          onClose: l,
                      })
                    : null,
            ],
        });
    };
