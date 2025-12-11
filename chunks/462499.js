l.d(e, { default: () => b }), l(388685), l(953529);
var a = l(54381),
    t = l(473749),
    i = l(658722),
    r = l.n(i),
    s = l(793030),
    o = l(399606),
    u = l(668339),
    c = l(481060),
    d = l(471445),
    m = l(734893),
    h = l(208567),
    g = l(592125),
    x = l(984933),
    p = l(430824),
    v = l(768581),
    C = l(969632),
    j = l(580357),
    k = l(388032),
    I = l(609442);
function f(n, e, l, a) {
    return {
        channelId: n.value,
        title: e,
        description: l,
        emoji: null,
        icon: null != a ? a : null,
    };
}
function b(n) {
    var e, l;
    let { transitionState: i, onClose: b, resourceChannel: N, guildId: Z, onSave: G, onDelete: S, onIconUpload: y } = n,
        [P, U] = t.useState(null != (e = null == N ? void 0 : N.title) ? e : ""),
        [H, K] = t.useState(null != (l = null == N ? void 0 : N.description) ? l : ""),
        [L, M] = t.useState(
            (function (n) {
                if (null == n) return null;
                let e = g.Z.getChannel(n.channelId);
                return null == e
                    ? null
                    : {
                          value: e.id,
                          label: e.name,
                      };
            })(N),
        ),
        R = (0, o.e7)([C.Z], () => {
            var n;
            return null == (n = C.Z.getResourceChannel(null == N ? void 0 : N.channelId)) ? void 0 : n.icon;
        }),
        E = (0, o.Wu)([C.Z], () => {
            var n, e;
            return (null != (e = null == (n = C.Z.getSettings()) ? void 0 : n.resourceChannels) ? e : []).map(
                (n) => n.channelId,
            );
        }),
        T = P.length < m.n || null == L,
        w = t.useCallback(() => {
            null == L || P.length <= 0 || (G(f(L, P, H, R)), b());
        }, [G, b, P, L, R, H]),
        z = t.useCallback(() => {
            null == S || S(), b();
        }, [S, b]),
        B = t.useCallback(
            (n) => {
                M(n);
            },
            [M],
        ),
        O = t.useCallback(
            (n) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(Z)
                        .filter((e) => (0, m.k3)(e.channel) && !E.includes(e.channel.id) && r()(n, e.channel.name))
                        .map((n) => ({
                            value: n.channel.id,
                            label: n.channel.name,
                        })),
                ),
            [Z, E],
        ),
        X = t.useCallback(
            (n) => {
                if (null == n || null == Z) return null;
                let e = g.Z.getChannel(n.value),
                    l = p.Z.getGuild(Z);
                if (null == e || null == l) return null;
                let t = (0, d.KS)(e, l);
                return null == t
                    ? null
                    : (0, a.jsx)(t, {
                          size: "xs",
                          color: "currentColor",
                          className: I.channelIcon,
                      });
            },
            [Z],
        ),
        _ = t.useCallback(
            (n) => {
                null != y && null != L && y(f(L, P, H), n);
            },
            [L, P, y, H],
        ),
        D = t.useCallback(
            () =>
                null == R || null == L
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: L.value,
                          icon: R,
                      }),
            [L, R],
        ),
        F = t.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: k.intl.string(k.t["ETE/oC"]),
                    onClick: b,
                },
                {
                    variant: "primary",
                    text: k.intl.string(k.t["R3BPH+"]),
                    onClick: w,
                    disabled: T,
                },
            ],
            [w, T, b],
        );
    return (0, a.jsxs)(s.Modal, {
        title: k.intl.string(k.t.SNMXYt),
        transitionState: i,
        onClose: b,
        actions: F,
        actionBarInput:
            null != N
                ? (0, a.jsx)(c.Avr, {
                      text: k.intl.string(k.t.N86XcP),
                      onClick: z,
                      variant: "critical",
                  })
                : void 0,
        children: [
            (0, a.jsxs)("div", {
                className: I.formGroup,
                children: [
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [k.intl.string(k.t.nPa4Ju), (0, a.jsx)(j.Z, {})],
                    }),
                    (0, a.jsx)(u.d, {
                        value: L,
                        renderOptionPrefix: X,
                        options: O,
                        onChange: B,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: k.intl.string(k.t.eNDtJK),
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: I.separator }),
            (0, a.jsxs)("div", {
                className: I.formGroup,
                children: [
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [k.intl.string(k.t["lFy+aW"]), (0, a.jsx)(j.Z, {})],
                    }),
                    (0, a.jsx)(c.oil, {
                        value: P,
                        onChange: U,
                        placeholder: k.intl.string(k.t.XKUimI),
                        maxLength: m.am,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: I.separator }),
            (0, a.jsxs)("div", {
                className: I.formGroup,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.CnkilH),
                    }),
                    (0, a.jsx)(c.Kx8, {
                        value: H,
                        onChange: K,
                        placeholder: k.intl.string(k.t.na0V4E),
                        maxLength: m.Vu,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: I.separator }),
            (0, a.jsxs)("div", {
                className: I.splitGroup,
                children: [
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: k.intl.string(k.t.CB6dyu),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: k.intl.string(k.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsx)(h.Z, {
                            className: I.uploader,
                            imageClassName: I.uploadImage,
                            image: R,
                            makeURL: D,
                            icon: (0, a.jsx)(c.rG2, {
                                size: "md",
                                color: "currentColor",
                            }),
                            hideSize: !0,
                            onChange: _,
                            iconClassName: I.uploadImageIcon,
                            showIcon: null == R,
                        }),
                    }),
                ],
            }),
        ],
    });
}
