l.d(t, { A: () => y });
var n = l(627968),
    i = l(64700),
    a = l(17928),
    s = l(452027),
    r = l(922016),
    u = l(862301),
    o = l(834730),
    d = l(565645),
    c = l(414079),
    m = l(713517),
    f = l(375499),
    h = l(267889),
    g = l(808728),
    x = l(284009),
    v = l.n(x),
    j = l(159273),
    p = l(7584),
    C = l(307731),
    N = l(985018),
    b = l(809052);
function y(e) {
    let {
            className: t,
            guildId: l,
            error: x,
            emojiId: y,
            emojiName: w,
            isRequiredField: A = !0,
            shouldUpdateBothEmojiFields: E = !1,
            setEmojiId: S,
            setEmojiName: M,
        } = e,
        k = (function (e) {
            let { emojiId: t, emojiName: l } = e,
                n = (0, a.bG)([j.Ay], () => (null != t ? j.Ay.getCustomEmojiById(t) : null));
            if (null != n || null != l)
                if (null == t)
                    return (
                        v()(null != l, "emojiName must be defined if emojiId is not defined"),
                        p.Ay.convertSurrogateToName(l, !1)
                    );
                else return n?.name;
        })({ emojiId: y, emojiName: w }),
        T = (0, a.bG)([g.Ay], () => (null != l ? g.Ay.getDefaultChannel(l) : null)),
        I = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, m.A)(I),
        F = () => {
            M(void 0), S(void 0);
        },
        R = (e) => {
            e.stopPropagation(), F();
        },
        O = i.useMemo(() => {
            let e = null != y && "" !== y,
                t = null != w && "" !== w,
                l = null != k && "" !== k,
                n = t && !Number.isNaN(parseInt(w)) && !l && !e;
            return { hasEmojiId: e, hasEmojiName: t, hasEmojiDisplayName: l, isDeletedCustomEmoji: n };
        }, [y, w, k]),
        P = !O.isDeletedCustomEmoji && O.hasEmojiDisplayName;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(s.D, {
            required: A,
            label: N.intl.string(N.t["3BQmiC"]),
            errorMessage: x ?? void 0,
            children: (0, n.jsx)(r.Y, {
                targetElementRef: I,
                animation: r.Y.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(h.A, {
                        closePopout: t,
                        pickerIntention: C.EmojiIntention.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: l, willClose: n } = e,
                                i = l?.id == null;
                            F(), i ? M(l?.optionallyDiverseSequence) : (E && M(l?.name), S(l?.id)), n && t();
                        },
                        guildId: l,
                        channel: T,
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsxs)(u.F, {
                        ...e,
                        className: b.LM,
                        ref: I,
                        children: [
                            (0, n.jsx)(f.A, {
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !O.isDeletedCustomEmoji && (O.hasEmojiId || O.hasEmojiName)
                                        ? () => (0, n.jsx)(d.A, { emojiName: w, emojiId: y })
                                        : null,
                            }),
                            (0, n.jsx)(o.E, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                color: P ? "text-default" : "text-muted",
                                children: P ? `:${k}:` : N.intl.string(N.t.QTK0TJ),
                            }),
                            P && D && (0, n.jsx)(c.A, { ...e, onClick: R }),
                        ],
                    });
                },
            }),
        }),
    });
}
