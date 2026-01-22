n.d(t, { h: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(582754),
    u = n(397927),
    d = n(308528),
    f = n(854627),
    p = n(12901),
    _ = n(954571),
    h = n(975571),
    m = n(427262),
    g = n(326084),
    E = n(851746),
    b = n(652215),
    y = n(985018),
    O = n(185914),
    A = n(299148);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
let I = (e, t) => {
        (0, p.default)(), d.A.openPrivateChannel({ recipientIds: e }), t();
    },
    T = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: a, eventHandlers: o } = (0, f.A)({
                userId: null == t ? void 0 : t.id,
                size: u._3J.SIZE_56,
            }),
            l = m.Ay.getName(t),
            c = n === g.o.FAIL;
        return (0, r.jsxs)("div", {
            className: O.w4,
            children: [
                (0, r.jsx)(
                    u.euF,
                    S(
                        {
                            imageClassName: s()({ [O.jN]: c }),
                            src: a,
                            "aria-label": l,
                            size: u._3J.SIZE_32,
                        },
                        o,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  className: O.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: l,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: O.nT,
                                  color: "text-strong",
                                  children: y.intl.format(y.t.RO3T4B, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: O.Pm,
                          color: "text-strong",
                          children: l,
                      }),
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: y.intl.string(y.t["g33r/P"]),
                    icon: u.oyn,
                    onClick: () => I(t.id, i),
                }),
            ],
        });
    },
    C = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: a } = e,
            s = (0, l.bG)([E.A], () => E.A.getReferralsRemaining());
        _.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: d } = i.useContext(c.CZ);
        if (null === s) return (0, r.jsx)(u.y$y, {});
        let f = () =>
                d.enabled
                    ? {
                          src: A.A,
                          type: "image",
                      }
                    : {
                          rive: u.lBW,
                          type: "rive",
                      },
            p = () =>
                0 === t.filter((e) => e.status === g.o.SUCCESS).length
                    ? y.intl.string(y.t["7VBEue"])
                    : !0 === a
                      ? y.intl.string(y.t.GP5lbq)
                      : y.intl.string(y.t.tKCltd),
            m = () =>
                !0 === a
                    ? y.intl.format(y.t["4gJJfD"], { helpdeskArticle: h.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) })
                    : y.intl.format(y.t.AwGSWl, { helpdeskArticle: h.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) }),
            v = () =>
                (0, r.jsx)("div", {
                    className: O.Hz,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            T,
                            {
                                recipient: e.recipient,
                                status: e.status,
                                onClose: n,
                            },
                            e.recipient.id,
                        ),
                    ),
                });
        return (0, r.jsx)(o.ExpressiveModal, {
            graphic: f(),
            gradientColor: "nitro-pink",
            title: p(),
            subtitle: m(),
            onClose: n,
            transitionState: o.ip4.ENTERED,
            children: v(),
        });
    };
