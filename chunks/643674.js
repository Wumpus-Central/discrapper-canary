"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(565645),
    o = n(375499),
    d = n(937773),
    c = n(460760),
    u = n(555337),
    m = n(307731),
    g = n(985018);
let x = (e) => {
        let {
                reason: t = "",
                emoji_name: n,
                onSetReason: c,
                onSelectEmoji: g,
                onClearPressed: x,
                reasonMinLength: h,
                reasonMaxLength: _,
                placeholder: A,
                position: p,
            } = e,
            f = s.useRef(null),
            [j, N] = s.useState(!1),
            E = (0, l.bG)([u.A], () => u.A.isGuildMetadataLoaded()),
            C = (0, i.jsx)(r.YNO, {
                targetElementRef: f,
                onRequestClose: () => {
                    N(!1);
                },
                shouldShow: j,
                position: "right",
                align: "top",
                animation: r.YNO.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(d.A, {
                        pickerIntention: m.EmojiIntention.COMMUNITY_CONTENT,
                        closePopout: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: i } = e;
                            null != n && g(n), i && t();
                        },
                    });
                },
                children: () =>
                    (0, i.jsx)(o.A, {
                        active: !1,
                        onClick: () => {
                            N(!0);
                        },
                        tabIndex: 0,
                        renderButtonContents: null != n ? () => (0, i.jsx)(a.A, { emojiName: n, animated: !1 }) : null,
                        ref: f,
                    }),
            });
        return (0, i.jsx)(
            r.ksK,
            {
                placeholder: A,
                value: t,
                minLength: h,
                maxLength: _,
                defaultDirty: t?.length > 0,
                leading: { type: "emoji", button: C },
                onChange: (e) => {
                    c(e);
                },
                clearable: { show: (t?.length ?? 0) > 0 || null != n },
                onClear: x,
            },
            `text-input-${p}-${E}`,
        );
    },
    h = (e) => {
        let { reasonMinLength: t, reasonMaxLength: n, guildId: s, reasons: l } = e,
            a = [
                g.intl.string(g.t["9dhBGo"]),
                g.intl.string(g.t["8RmhKF"]),
                g.intl.string(g.t["2t0V83"]),
                g.intl.string(g.t.l8WqCR),
            ],
            o = [];
        for (let e = 0; e < 4; e++)
            o.push(
                (0, i.jsx)(
                    x,
                    {
                        position: e,
                        placeholder: a[e],
                        ...l[e],
                        onSetReason: (t) => {
                            let n = [...l],
                                i = Object.assign({}, l[e], { reason: t });
                            (n[e] = i), (0, c.MA)(s, n);
                        },
                        onSelectEmoji: (t) => {
                            let n = [...l],
                                i = Object.assign({}, l[e], { emoji_name: t.optionallyDiverseSequence });
                            (n[e] = i), (0, c.MA)(s, n);
                        },
                        onClearPressed: () => {
                            let t = [...l],
                                n = { reason: "", emoji_name: null };
                            (t[e] = n), (0, c.MA)(s, t);
                        },
                        reasonMinLength: t,
                        reasonMaxLength: n,
                    },
                    "reasonListItem-" + e,
                ),
            );
        return (0, i.jsx)(r.BJc, { gap: 16, children: o });
    };
