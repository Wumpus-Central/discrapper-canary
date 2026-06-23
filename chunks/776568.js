t.d(n, { A: () => C });
var i = t(627968),
    l = t(64700),
    o = t(17928),
    s = t(452027),
    a = t(922016),
    r = t(862301),
    u = t(834730),
    d = t(565645),
    m = t(414079),
    c = t(713517),
    j = t(375499),
    p = t(267889),
    h = t(808728),
    f = t(284009),
    A = t.n(f),
    N = t(159273),
    x = t(7584),
    E = t(307731),
    g = t(375708),
    v = t(809052);
function C(e) {
    let {
            className: n,
            guildId: t,
            error: f,
            emojiId: C,
            emojiName: y,
            isRequiredField: I = !0,
            shouldUpdateBothEmojiFields: b = !1,
            setEmojiId: D,
            setEmojiName: k,
        } = e,
        B = (function (e) {
            let { emojiId: n, emojiName: t } = e,
                i = (0, o.bG)([N.Ay], () => (null != n ? N.Ay.getCustomEmojiById(n) : null));
            if (null != i || null != t)
                if (null == n)
                    return (
                        A()(null != t, "emojiName must be defined if emojiId is not defined"),
                        x.Ay.convertSurrogateToName(t, !1)
                    );
                else return i?.name;
        })({ emojiId: C, emojiName: y }),
        S = (0, o.bG)([h.Ay], () => (null != t ? h.Ay.getDefaultChannel(t) : null)),
        w = l.useRef(null),
        { isHoveringOrFocusing: M } = (0, c.A)(w);
    function O() {
        k(void 0), D(void 0);
    }
    function P(e) {
        e.stopPropagation(), O();
    }
    let R = l.useMemo(() => {
            let e = null != C && "" !== C,
                n = null != y && "" !== y,
                t = null != B && "" !== B,
                i = n && !Number.isNaN(parseInt(y)) && !t && !e;
            return { hasEmojiId: e, hasEmojiName: n, hasEmojiDisplayName: t, isDeletedCustomEmoji: i };
        }, [C, y, B]),
        T = !R.isDeletedCustomEmoji && R.hasEmojiDisplayName;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(s.D, {
            required: I,
            label: g.intl.string(g.t["3BQmiC"]),
            errorMessage: f ?? void 0,
            children: (0, i.jsx)(a.Y, {
                targetElementRef: w,
                animation: a.Y.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(p.A, {
                        closePopout: n,
                        pickerIntention: E.EmojiIntention.SOUNDBOARD,
                        onNavigateAway: n,
                        onSelectEmoji: (e) => {
                            let { emoji: t, willClose: i } = e,
                                l = t?.id == null;
                            O(), l ? k(t?.optionallyDiverseSequence) : (b && k(t?.name), D(t?.id)), i && n();
                        },
                        guildId: t,
                        channel: S,
                    });
                },
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, i.jsxs)(r.F, {
                        ...e,
                        className: v.LM,
                        ref: w,
                        children: [
                            (0, i.jsx)(j.A, {
                                active: t,
                                tabIndex: 0,
                                renderButtonContents:
                                    !R.isDeletedCustomEmoji && (R.hasEmojiId || R.hasEmojiName)
                                        ? () => (0, i.jsx)(d.A, { emojiName: y, emojiId: C })
                                        : null,
                            }),
                            (0, i.jsx)(u.E, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                color: T ? "text-default" : "text-muted",
                                children: T ? `:${B}:` : g.intl.string(g.t.QTK0TJ),
                            }),
                            T && M && (0, i.jsx)(m.A, { ...e, onClick: P }),
                        ],
                    });
                },
            }),
        }),
    });
}
