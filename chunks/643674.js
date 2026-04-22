n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(265872),
    a = n(292666),
    o = n(331322),
    d = n(565645),
    c = n(375499),
    u = n(937773),
    m = n(460760),
    g = n(555337),
    h = n(307731),
    x = n(985018);
let _ = (e) => {
        let {
                reason: t = "",
                emoji_name: n,
                onSetReason: o,
                onSelectEmoji: m,
                onClearPressed: x,
                reasonMinLength: _,
                reasonMaxLength: p,
                placeholder: A,
                position: E,
            } = e,
            f = l.useRef(null),
            [j, N] = l.useState(!1),
            I = (0, s.bG)([g.A], () => g.A.isGuildMetadataLoaded()),
            C = (0, i.jsx)(r.Y, {
                targetElementRef: f,
                onRequestClose: () => {
                    N(!1);
                },
                shouldShow: j,
                position: "right",
                align: "top",
                animation: r.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(u.A, {
                        pickerIntention: h.EmojiIntention.COMMUNITY_CONTENT,
                        closePopout: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: i } = e;
                            null != n && m(n), i && t();
                        },
                    });
                },
                children: () =>
                    (0, i.jsx)(c.A, {
                        active: !1,
                        onClick: () => {
                            N(!0);
                        },
                        tabIndex: 0,
                        renderButtonContents: null != n ? () => (0, i.jsx)(d.A, { emojiName: n, animated: !1 }) : null,
                        ref: f,
                    }),
            });
        return (0, i.jsx)(
            a.k,
            {
                placeholder: A,
                value: t,
                minLength: _,
                maxLength: p,
                defaultDirty: t?.length > 0,
                leading: { type: "emoji", button: C },
                onChange: (e) => {
                    o(e);
                },
                clearable: { show: (t?.length ?? 0) > 0 || null != n },
                onClear: x,
            },
            `text-input-${E}-${I}`,
        );
    },
    p = (e) => {
        let { reasonMinLength: t, reasonMaxLength: n, guildId: l, reasons: s } = e,
            r = [
                x.intl.string(x.t["9dhBGo"]),
                x.intl.string(x.t["8RmhKF"]),
                x.intl.string(x.t["2t0V83"]),
                x.intl.string(x.t.l8WqCR),
            ],
            a = [];
        for (let e = 0; e < 4; e++)
            a.push(
                (0, i.jsx)(
                    _,
                    {
                        position: e,
                        placeholder: r[e],
                        ...s[e],
                        onSetReason: (t) => {
                            let n = [...s],
                                i = Object.assign({}, s[e], { reason: t });
                            (n[e] = i), (0, m.MA)(l, n);
                        },
                        onSelectEmoji: (t) => {
                            let n = [...s],
                                i = Object.assign({}, s[e], { emoji_name: t.optionallyDiverseSequence });
                            (n[e] = i), (0, m.MA)(l, n);
                        },
                        onClearPressed: () => {
                            let t = [...s],
                                n = { reason: "", emoji_name: null };
                            (t[e] = n), (0, m.MA)(l, t);
                        },
                        reasonMinLength: t,
                        reasonMaxLength: n,
                    },
                    "reasonListItem-" + e,
                ),
            );
        return (0, i.jsx)(o.B, { gap: 16, children: a });
    };
