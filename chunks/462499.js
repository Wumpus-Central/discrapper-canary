l.d(e, { default: () => f }), l(388685), l(953529);
var a = l(54381),
    t = l(473749),
    i = l(658722),
    r = l.n(i),
    o = l(793030),
    s = l(399606),
    c = l(481060),
    d = l(471445),
    u = l(734893),
    m = l(208567),
    h = l(592125),
    g = l(984933),
    x = l(430824),
    p = l(768581),
    v = l(969632),
    C = l(580357),
    j = l(388032),
    k = l(609442);
function I(n, e, l, a) {
    return {
        channelId: n,
        title: e,
        description: l,
        emoji: null,
        icon: null != a ? a : null,
    };
}
function f(n) {
    var e, l;
    let { transitionState: i, onClose: f, resourceChannel: b, guildId: N, onSave: Z, onDelete: G, onIconUpload: S } = n,
        [y, U] = t.useState(null != (e = null == b ? void 0 : b.title) ? e : ""),
        [H, M] = t.useState(null != (l = null == b ? void 0 : b.description) ? l : ""),
        [P, K] = t.useState(
            (function (n) {
                if (null == n) return null;
                let e = h.Z.getChannel(n.channelId);
                return null == e ? null : e.id;
            })(b),
        ),
        L = (0, s.e7)([v.Z], () => {
            var n;
            return null == (n = v.Z.getResourceChannel(null == b ? void 0 : b.channelId)) ? void 0 : n.icon;
        }),
        R = (0, s.Wu)([v.Z], () => {
            var n, e;
            return (null != (e = null == (n = v.Z.getSettings()) ? void 0 : n.resourceChannels) ? e : []).map(
                (n) => n.channelId,
            );
        }),
        E = y.length < u.n || null == P,
        T = t.useCallback(() => {
            null == P || y.length <= 0 || (Z(I(P, y, H, L)), f());
        }, [Z, f, y, P, L, H]),
        w = t.useCallback(() => {
            null == G || G(), f();
        }, [G, f]),
        z = t.useCallback(
            (n) => {
                K(n);
            },
            [K],
        ),
        B = t.useCallback(
            (n) => {
                let e = g.ZP.getSelectableChannels(N),
                    l = x.Z.getGuild(N);
                return Promise.resolve(
                    e
                        .filter((e) => (0, u.k3)(e.channel) && !R.includes(e.channel.id) && r()(n, e.channel.name))
                        .map((n) => {
                            let e = (0, d.KS)(n.channel, l);
                            return {
                                id: n.channel.id,
                                value: n.channel.id,
                                label: n.channel.name,
                                leading:
                                    null != e
                                        ? (0, a.jsx)(e, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: k.channelIcon,
                                          })
                                        : void 0,
                            };
                        }),
                );
            },
            [N, R],
        ),
        V = t.useCallback(
            (n) => {
                null != S && null != P && S(I(P, y, H), n);
            },
            [P, y, S, H],
        ),
        W = t.useCallback(
            () =>
                null == L || null == P
                    ? null
                    : p.ZP.getResourceChannelIconURL({
                          channelId: P,
                          icon: L,
                      }),
            [P, L],
        ),
        X = t.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: j.intl.string(j.t["ETE/oC"]),
                    onClick: f,
                },
                {
                    variant: "primary",
                    text: j.intl.string(j.t["R3BPH+"]),
                    onClick: T,
                    disabled: E,
                },
            ],
            [T, E, f],
        );
    return (0, a.jsxs)(o.Modal, {
        title: j.intl.string(j.t.SNMXYt),
        transitionState: i,
        onClose: f,
        actions: X,
        actionBarInput:
            null != b
                ? (0, a.jsx)(c.Avr, {
                      text: j.intl.string(j.t.N86XcP),
                      onClick: w,
                      variant: "critical",
                  })
                : void 0,
        children: [
            (0, a.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [j.intl.string(j.t.nPa4Ju), (0, a.jsx)(C.Z, {})],
                    }),
                    (0, a.jsx)(c.VcW, {
                        selectionMode: "single",
                        value: null != P ? P : void 0,
                        options: B,
                        onSelectionChange: z,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.eNDtJK),
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: k.separator }),
            (0, a.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [j.intl.string(j.t["lFy+aW"]), (0, a.jsx)(C.Z, {})],
                    }),
                    (0, a.jsx)(c.oil, {
                        value: y,
                        onChange: U,
                        placeholder: j.intl.string(j.t.XKUimI),
                        maxLength: u.am,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: k.separator }),
            (0, a.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.CnkilH),
                    }),
                    (0, a.jsx)(c.Kx8, {
                        value: H,
                        onChange: M,
                        placeholder: j.intl.string(j.t.na0V4E),
                        maxLength: u.Vu,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: k.separator }),
            (0, a.jsxs)("div", {
                className: k.splitGroup,
                children: [
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.string(j.t.CB6dyu),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: j.intl.string(j.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsx)(m.Z, {
                            className: k.uploader,
                            imageClassName: k.uploadImage,
                            image: L,
                            makeURL: W,
                            icon: (0, a.jsx)(c.rG2, {
                                size: "md",
                                color: "currentColor",
                            }),
                            hideSize: !0,
                            onChange: V,
                            iconClassName: k.uploadImageIcon,
                            showIcon: null == L,
                        }),
                    }),
                ],
            }),
        ],
    });
}
