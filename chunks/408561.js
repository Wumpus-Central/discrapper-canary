n.d(t, { default: () => b });
var a = n(200651),
    o = n(192379),
    l = n(442837),
    i = n(704215),
    r = n(481060),
    s = n(211266),
    c = n(605236),
    d = n(624659),
    u = n(594174),
    _ = n(626135),
    m = n(924400),
    h = n(987562),
    x = n(981631),
    f = n(388032);
function b(e) {
    let { transitionState: t, onClose: b, channel: p } = e,
        g = (0, s.Z)(h.TL),
        k = (0, l.e7)([u.default], () => u.default.getUser(p.getRecipientId()));
    return (
        o.useEffect(() => {
            _.default.track(x.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, a.jsx)(d.Z, {
            hasCloseButton: !0,
            header: f.intl.string(f.t.SxsBFB),
            body: f.intl.formatToPlainString(f.t['7kb7z8'], { username: null == k ? void 0 : k.username }),
            problems: g,
            feedbackProblems: {
                [h.YA.OTHER]: {
                    subheader: f.intl.string(f.t.VQkdtL),
                    hint: f.intl.string(f.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: l, closeClicked: s } = e;
                o && (0, c.EW)(i.z.USER_DM_MUTE_FEEDBACK);
                let d = null == t || s;
                (0, m.Z)(t, l, d, o),
                    d ||
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: f.intl.string(f.t.sYrCub),
                                    ...t
                                });
                        });
            },
            onClose: b,
            transitionState: t,
            otherKey: h.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
