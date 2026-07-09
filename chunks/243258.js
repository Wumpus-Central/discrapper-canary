l.d(t, { default: () => M }), l(321073);
var s = l(627968),
    i = l(64700),
    n = l(503698),
    a = l.n(n),
    r = l(192308),
    c = l(834730),
    o = l(176781),
    d = l(661531),
    h = l(691540),
    u = l(857250),
    m = l(97483),
    p = l(493336),
    g = l(573435),
    f = l(953832),
    x = l(619517),
    C = l(451909),
    A = l(378570),
    E = l(223863),
    k = l(95701),
    j = l(734057),
    y = l(31717),
    b = l(403362),
    w = l(518960),
    N = l(372684),
    T = l(430795),
    R = l(74847),
    v = l(589553),
    I = l(280483),
    F = l(381941),
    O = l(375708),
    P = l(201181),
    _ = l(808961);
function S(e) {
    let { clips: t } = e,
        l = t[0],
        i = l.thumbnail,
        n = null;
    return (
        "" !== i &&
            ((n = (0, s.jsx)("div", {
                className: a()(_.cR, _.JZ),
                children: (0, s.jsx)(x.Ay, { className: _.xn, src: i, width: 56, height: 56 }),
            })),
            t.length > 1 &&
                (n = (0, s.jsxs)("div", {
                    className: _.EW,
                    children: [
                        (0, s.jsx)(g.Ay, {
                            mask: g.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: n,
                        }),
                        (0, s.jsxs)(c.E, {
                            className: _.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", t.length - 1],
                        }),
                    ],
                }))),
        (0, s.jsxs)("div", {
            className: _.sq,
            children: [
                (0, s.jsx)("div", {
                    className: _.FG,
                    children: (0, s.jsxs)("div", {
                        className: _.kp,
                        children: [
                            (0, s.jsx)(o.x, { className: P.$, size: "refresh_sm", color: d.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === t.length
                                        ? (l.name ?? O.intl.string(O.t.Cyxddp))
                                        : O.intl.formatToPlainString(O.t.SJ6pPX, { count: t.length }),
                            }),
                        ],
                    }),
                }),
                n,
            ],
        })
    );
}
function M(e) {
    let { clips: t, onClose: l, ...n } = e;
    (0, I.A)();
    let a = i.useCallback(
            async (e, s, i) => {
                let { withMessage: n, transitionToDestination: a, closeAfterSend: c } = s;
                i(!0);
                try {
                    let s = [],
                        o = [];
                    for (let e of t) {
                        let t = await (0, T.VO)(e),
                            l = (0, v.A)(e, e.type === N.nQ.SCREENSHOT ? "jpeg" : "mp4");
                        switch (e.type) {
                            case N.nQ.CLIP:
                            case N.nQ.VOICE_CLIP:
                                s.push(new File([t], l, { type: "video/mp4" })), o.push({ clip: e });
                                break;
                            case N.nQ.SCREENSHOT:
                                s.push(new File([t], l, { type: "image/jpeg" })), o.push({});
                                break;
                            default:
                                e.type;
                        }
                    }
                    let d = (await Promise.all(e.map(E.pk))).filter(b.Vq).filter((e) => (0, R.t)(e));
                    if (0 === d.length) {
                        (0, h.P0)((0, u.o)(O.intl.string(O.t.iufib1), m.Ck.FAILURE)), i(!1);
                        return;
                    }
                    for (let e of (c && l(), d)) {
                        let t = j.A.getChannel(e);
                        null != t &&
                            ((0, w.R)(s, t, y.C.ChannelMessage, {
                                filesMetadata: o,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            null != n &&
                                "" !== n.trim() &&
                                (await p.A.sendMessage(t.id, C.Ay.parse(t, n), !1, { location: F.Hx.FORWARDING })));
                    }
                    a && 1 === d.length && ((0, A.iN)(d[0], { openTextInVoiceIfVoiceChannel: !0 }), r.closeAllModals());
                } catch (e) {
                    (0, h.P0)((0, u.o)(O.intl.string(O.t.iufib1), m.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [t, l],
        ),
        c = i.useCallback((e) => {
            if (e instanceof k.YB && !(0, R.t)(e.id)) return { label: O.intl.string(O.t.iufib1) };
        }, []);
    return (0, s.jsx)(f.ForwardModal, {
        ...n,
        onClose: l,
        customTitle: O.intl.string(O.t.I8lglT),
        customSubtitle: O.intl.string(O.t.Ey7mOU),
        customPreview: (0, s.jsx)(S, { clips: t }),
        customSendHandler: a,
        customValidateDestination: c,
    });
}
