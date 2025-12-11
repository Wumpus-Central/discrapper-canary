n.d(t, { q: () => N });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(493773),
    u = n(607070),
    m = n(745510),
    f = n(208049),
    h = n(763296),
    g = n(914010),
    x = n(626135),
    b = n(326706),
    p = n(981631),
    j = n(675654),
    v = n(710111),
    C = n(162085),
    y = n(388032),
    T = n(5929);
function w(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s, text: d } = e,
        u = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        m = y.intl.formatToPlainString(y.t.tuMUJ2, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name,
        }),
        f = r.useCallback(() => {
            x.default.track(p.rMx.MODERATOR_QUEUE_ACTION, {
                guild_id: g.Z.getGuildId(),
                action: "airhorn",
            }),
                null != i && i();
        }, [i]);
    return (0, a.jsxs)(o.P3F, {
        "aria-label": m,
        tag: "span",
        onClick: f,
        className: l()(T.inlineContainer, T.inlineButton, { [T.playing]: !0 === s }, t),
        children: [
            u &&
                (0, a.jsx)(c.Z, {
                    emojiId: null == n ? void 0 : n.emojiId,
                    emojiName: null == n ? void 0 : n.emojiName,
                    className: T.soundmojiEmoji,
                }),
            (0, a.jsx)("span", { children: " ".concat(d, " ") }),
        ],
    });
}
function S(e) {
    let { containerRef: t, text: n } = e,
        i = r.useRef(null),
        l = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getSoundsForGuild(v.X8)) ? void 0 : e.find((e) => "airhorn" === e.name);
        }),
        { createMultipleConfettiAt: o } = r.useContext(m.h),
        c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        { isPlaying: g, playSound: x } = (0, b.W)(l);
    (0, d.ZP)(() => {
        (0, f.w)();
    });
    let p = r.useCallback(async () => {
        if (await x()) {
            var e;
            if ((null == (e = i.current) || e.addAnimation(), !c && (null == t ? void 0 : t.current) != null)) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 3,
                    },
                    a = j.CA[Math.floor(Math.random() * j.CA.length)];
                o(
                    n.x,
                    n.y,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -500,
                            },
                            maxValue: {
                                x: 500,
                                y: -100,
                            },
                        },
                    },
                    40,
                    { sprite: a },
                );
            }
        }
    }, [x, o, c, t]);
    return void 0 === l
        ? null
        : (0, a.jsx)(w, {
              sound: l,
              playSound: p,
              isPlaying: g,
              text: n,
          });
}
function N() {
    let e = r.useRef(null);
    return (0, a.jsxs)(o.Kqy, {
        className: T.container,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: {
            top: 24,
            bottom: 24,
        },
        ref: e,
        children: [
            (0, a.jsx)(o.l22, {
                size: "custom",
                width: 48,
                height: 48,
            }),
            (0, a.jsxs)(o.Kqy, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, a.jsx)(o.Heading, {
                        className: T.header,
                        variant: "heading-md/medium",
                        children: y.intl.string(C.default.h6QNky),
                    }),
                    (0, a.jsx)(o.Text, {
                        className: T.text,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: y.intl.format(C.default["8N4c58"], {
                            airhornHook: (t) =>
                                (0, a.jsx)(S, {
                                    containerRef: e,
                                    text: t,
                                }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
