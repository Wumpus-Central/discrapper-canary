n.d(t, { m: () => N });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(257465),
    c = n(667202),
    u = n(780384),
    d = n(481060),
    f = n(493683),
    _ = n(518950),
    p = n(342386),
    h = n(626135),
    m = n(63063),
    g = n(51144),
    E = n(281494),
    b = n(276444),
    y = n(981631),
    O = n(388032),
    v = n(734501),
    I = n(690813);
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
let A = (e, t) => {
        (0, p.Z)(), f.Z.openPrivateChannel({ recipientIds: e }), t();
    },
    C = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: a, eventHandlers: s } = (0, _.Z)({
                userId: null == t ? void 0 : t.id,
                size: d.EFr.SIZE_56,
            }),
            l = g.ZP.getName(t),
            c = n === E.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: v.trialRecipientRow,
            children: [
                (0, r.jsx)(
                    d.qEK,
                    S(
                        {
                            imageClassName: o()({ [v.erroredAvatar]: c }),
                            src: a,
                            "aria-label": l,
                            size: d.EFr.SIZE_32,
                        },
                        s,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: v.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: l,
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-md/medium",
                                  className: v.userName,
                                  color: "text-primary",
                                  children: O.intl.format(O.t.RO3T4O, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(d.Text, {
                          variant: "text-md/medium",
                          className: v.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: l,
                      }),
                (0, r.jsx)(d.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: O.intl.string(O.t["g33r/P"]),
                    icon: d.kBi,
                    onClick: () => A(t.id, i),
                }),
            ],
        });
    },
    N = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: a } = e,
            o = (0, s.e7)([b.Z], () => b.Z.getReferralsRemaining());
        h.default.track(y.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: f } = i.useContext(u.Sf);
        if (null === o) return (0, r.jsx)(d.$jN, {});
        let _ = () =>
                f.enabled
                    ? {
                          src: I.Z,
                          type: "image",
                      }
                    : {
                          rive: d.p8m,
                          type: "rive",
                      },
            p = () =>
                0 === t.filter((e) => e.status === E.Fz.SUCCESS).length
                    ? O.intl.string(O.t["7VBEub"])
                    : !0 === a
                      ? O.intl.string(O.t.GP5lbm)
                      : O.intl.string(O.t.tKCltb),
            g = () =>
                !0 === a
                    ? O.intl.format(O.t["4gJJfH"], { helpdeskArticle: m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM) })
                    : O.intl.format(O.t.AwGSWl, { helpdeskArticle: m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM) }),
            T = () =>
                (0, r.jsx)("div", {
                    className: v.trialRecipientContainer,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            C,
                            {
                                recipient: e.recipient,
                                status: e.status,
                                onClose: n,
                            },
                            e.recipient.id,
                        ),
                    ),
                });
        return (0, r.jsx)(c.I, {
            graphic: _(),
            gradientColor: "nitro-pink",
            title: p(),
            subtitle: g(),
            onClose: n,
            transitionState: l.D.ENTERED,
            children: T(),
        });
    };
