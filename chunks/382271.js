n.d(t, { m: () => A });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(493683),
    f = n(518950),
    p = n(342386),
    _ = n(626135),
    m = n(63063),
    h = n(51144),
    g = n(281494),
    E = n(276444),
    b = n(981631),
    y = n(388032),
    O = n(631100),
    v = n(726667);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = (e, t) => {
        (0, p.default)(), d.Z.openPrivateChannel({ recipientIds: e }), t();
    },
    C = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: a, eventHandlers: s } = (0, f.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_56,
            }),
            l = h.ZP.getName(t),
            c = n === g.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: O.trialRecipientRow,
            children: [
                (0, r.jsx)(
                    u.qEK,
                    I(
                        {
                            imageClassName: o()({ [O.erroredAvatar]: c }),
                            src: a,
                            "aria-label": l,
                            size: u.EFr.SIZE_32,
                        },
                        s,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  className: O.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: l,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: O.userName,
                                  color: "text-strong",
                                  children: y.intl.format(y.t.RO3T4B, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: O.trialRecipientRowDisplayName,
                          color: "text-strong",
                          children: l,
                      }),
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: y.intl.string(y.t["g33r/P"]),
                    icon: u.kBi,
                    onClick: () => T(t.id, i),
                }),
            ],
        });
    },
    A = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: a } = e,
            o = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining());
        _.default.track(b.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: d } = i.useContext(c.Sf);
        if (null === o) return (0, r.jsx)(u.$jN, {});
        let f = () =>
                d.enabled
                    ? {
                          src: v.Z,
                          type: "image",
                      }
                    : {
                          rive: u.p8m,
                          type: "rive",
                      },
            p = () =>
                0 === t.filter((e) => e.status === g.Fz.SUCCESS).length
                    ? y.intl.string(y.t["7VBEue"])
                    : !0 === a
                      ? y.intl.string(y.t.GP5lbq)
                      : y.intl.string(y.t.tKCltd),
            h = () =>
                !0 === a
                    ? y.intl.format(y.t["4gJJfD"], { helpdeskArticle: m.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM) })
                    : y.intl.format(y.t.AwGSWl, { helpdeskArticle: m.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM) }),
            S = () =>
                (0, r.jsx)("div", {
                    className: O.trialRecipientContainer,
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
        return (0, r.jsx)(s.ExpressiveModal, {
            graphic: f(),
            gradientColor: "nitro-pink",
            title: p(),
            subtitle: h(),
            onClose: n,
            transitionState: s.Dvm.ENTERED,
            children: S(),
        });
    };
