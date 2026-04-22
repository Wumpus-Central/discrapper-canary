n.d(t, { aP: () => R, oJ: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(189213),
    o = n(452027),
    d = n(311907),
    c = n(265872),
    u = n(834730),
    m = n(241326),
    g = n(331322),
    h = n(260598),
    x = n(512950),
    _ = n(565645),
    p = n(915089),
    A = n(375499),
    E = n(937773),
    f = n(508675),
    j = n(7584),
    N = n(808728),
    I = n(841650),
    C = n(307731),
    b = n(985018),
    v = n(831452);
function S(e) {
    let { guildId: t, emojiData: n, onSelectEmoji: s } = e,
        r = l.useRef(null),
        a = (0, d.bG)([f.Ay], () => (null != n.id ? f.Ay.getCustomEmojiById(n.id) : void 0)),
        o = (0, d.bG)([N.Ay], () => N.Ay.getDefaultChannel(t)),
        m = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(E.A, {
                    pickerIntention: C.EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: o,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n &&
                            s(
                                null != n.id
                                    ? { id: n.id, name: void 0 }
                                    : { id: void 0, name: n.optionallyDiverseSequence },
                            ),
                            i && t();
                    },
                });
            },
            [s, o],
        ),
        g = l.useMemo(
            () =>
                null == a && null == n.name
                    ? null
                    : function () {
                          return (0, i.jsx)(_.A, {
                              className: v.Zg,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: a?.animated,
                          });
                      },
            [n, a],
        ),
        h = "";
    return (
        null != a ? (h = `:${a.name}:`) : null != n.name && (h = j.Ay.convertSurrogateToName(n.name)),
        (0, i.jsx)(c.Y, {
            targetElementRef: r,
            animation: c.Y.Animation.NONE,
            position: "top",
            renderPopout: m,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsxs)("div", {
                    ref: r,
                    className: v.oc,
                    ...e,
                    children: [
                        (0, i.jsx)(A.A, { className: v.Z8, active: n, tabIndex: 0, renderButtonContents: g }),
                        (0, i.jsx)(u.E, { variant: "text-md/normal", className: v.at, children: h }),
                    ],
                });
            },
        })
    );
}
function T(e) {
    let {
            guildId: t,
            initialData: n,
            benefitTypeInput: s,
            descriptionPlaceholder: r,
            canSubmit: d,
            onSave: c,
            onDelete: u,
            transitionState: x,
            onClose: _,
        } = e,
        A = (0, p.GV)(),
        [E, f] = l.useState(n?.description ?? ""),
        [j, N] = l.useState(() => ({ id: n?.emoji_id, name: n?.emoji_name })),
        I = d && "" !== E && (null != j.id || null != j.name);
    function C(e) {
        e.preventDefault(), I && (c({ description: E, emojiId: j.id, emojiName: j.name }), _());
    }
    let v = [{ text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: _ }];
    return (
        null != u &&
            v.push({
                text: b.intl.string(b.t.oyYWHE),
                variant: "critical-secondary",
                onClick: () => {
                    u(), _();
                },
                icon: m.u,
            }),
        v.push({
            text: null == n ? b.intl.string(b.t.OYkgVk) : b.intl.string(b.t["R3BPH+"]),
            variant: "primary",
            onClick: C,
            disabled: !I,
        }),
        (0, i.jsx)("form", {
            onSubmit: C,
            children: (0, i.jsx)(a.Modal, {
                transitionState: x,
                onClose: _,
                title: b.intl.string(b.t["2qf9EI"]),
                actions: v,
                children: (0, i.jsxs)(g.B, {
                    gap: "md",
                    children: [
                        s,
                        (0, i.jsx)(h.f, {
                            label: b.intl.string(b.t["1Ts7QP"]),
                            placeholder: r,
                            value: E,
                            rows: 1,
                            autosize: !0,
                            onChange: f,
                            "aria-labelledby": A,
                        }),
                        (0, i.jsx)(o.D, {
                            label: b.intl.string(b.t.sMOuuS),
                            children: (0, i.jsx)(S, { guildId: t, emojiData: j, onSelectEmoji: N }),
                        }),
                    ],
                }),
            }),
        })
    );
}
function y(e) {
    let { guildId: t, omitChannelIds: n, initialData: s, onSave: a, onDelete: o, transitionState: d, onClose: c } = e,
        [u, m] = l.useState(s?.ref_id),
        h = (0, p.GV)(),
        _ = (0, i.jsxs)(g.B, {
            gap: 16,
            children: [
                (0, i.jsx)(x.p, { messageType: x.Y.WARNING, children: b.intl.string(b.t.xunxCo) }),
                (0, i.jsx)(I.A, {
                    label: b.intl.string(b.t.GK18KJ),
                    guildId: t,
                    value: u,
                    initialChannelId: s?.ref_id,
                    omitChannelIds: n,
                    onChange: function (e) {
                        m(e);
                    },
                    "aria-labelledby": h,
                }),
            ],
        });
    return (0, i.jsx)(T, {
        guildId: t,
        initialData: s,
        benefitTypeInput: _,
        descriptionPlaceholder: b.intl.string(b.t.J8O1Lp),
        canSubmit: null != u,
        onSave: function (e) {
            r()(null != u, "Cannot submit null channel"), a({ ...e, channelId: u });
        },
        transitionState: d,
        onClose: c,
        onDelete: o,
    });
}
function R(e) {
    let { initialData: t, onSave: n, transitionState: s, onClose: a, onDelete: o, guildId: d } = e,
        [c, u] = l.useState(t?.name ?? ""),
        m = (0, p.GV)(),
        g = (0, i.jsx)(h.f, {
            label: b.intl.string(b.t.NPOJrU),
            placeholder: b.intl.string(b.t.NPOJrU),
            value: c,
            rows: 1,
            onChange: function (e) {
                u(e);
            },
            "aria-labelledby": m,
        });
    return (0, i.jsx)(T, {
        guildId: d,
        initialData: t,
        benefitTypeInput: g,
        descriptionPlaceholder: b.intl.string(b.t.ucP4Tt),
        canSubmit: "" !== c,
        onSave: function (e) {
            r()("" !== c, "Cannot submit empty name"), n({ ...e, name: c });
        },
        transitionState: s,
        onClose: a,
        onDelete: o,
    });
}
