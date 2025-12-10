l.d(n, { default: () => b }), l(388685), l(953529);
var a = l(54381),
    r = l(473749),
    t = l(658722),
    i = l.n(t),
    s = l(793030),
    o = l(399606),
    u = l(668339),
    c = l(481060),
    d = l(471445),
    m = l(734893),
    h = l(208567),
    p = l(592125),
    g = l(984933),
    x = l(430824),
    v = l(768581),
    C = l(969632),
    j = l(580357),
    k = l(388032),
    I = l(353441);
function f(e, n, l, a) {
    return {
        channelId: e.value,
        title: n,
        description: l,
        emoji: null,
        icon: null != a ? a : null,
    };
}
function b(e) {
    var n, l;
    let { transitionState: t, onClose: b, resourceChannel: N, guildId: _, onSave: Z, onDelete: y, onIconUpload: G } = e,
        [S, P] = r.useState(null != (n = null == N ? void 0 : N.title) ? n : ""),
        [U, H] = r.useState(null != (l = null == N ? void 0 : N.description) ? l : ""),
        [K, L] = r.useState(
            (function (e) {
                if (null == e) return null;
                let n = p.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: n.id,
                          label: n.name,
                      };
            })(N),
        ),
        M = (0, o.e7)([C.Z], () => {
            var e;
            return null == (e = C.Z.getResourceChannel(null == N ? void 0 : N.channelId)) ? void 0 : e.icon;
        }),
        R = (0, o.Wu)([C.Z], () => {
            var e, n;
            return (null != (n = null == (e = C.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map(
                (e) => e.channelId,
            );
        }),
        E = S.length < m.n || null == K,
        T = r.useCallback(() => {
            null == K || S.length <= 0 || (Z(f(K, S, U, M)), b());
        }, [Z, b, S, K, M, U]),
        w = r.useCallback(() => {
            null == y || y(), b();
        }, [y, b]),
        z = r.useCallback(
            (e) => {
                L(e);
            },
            [L],
        ),
        B = r.useCallback(
            (e) =>
                Promise.resolve(
                    g.ZP.getSelectableChannels(_)
                        .filter((n) => (0, m.k3)(n.channel) && !R.includes(n.channel.id) && i()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [_, R],
        ),
        O = r.useCallback(
            (e) => {
                if (null == e || null == _) return null;
                let n = p.Z.getChannel(e.value),
                    l = x.Z.getGuild(_);
                if (null == n || null == l) return null;
                let r = (0, d.KS)(n, l);
                return null == r
                    ? null
                    : (0, a.jsx)(r, {
                          size: "xs",
                          color: "currentColor",
                          className: I.channelIcon,
                      });
            },
            [_],
        ),
        X = r.useCallback(
            (e) => {
                null != G && null != K && G(f(K, S, U), e);
            },
            [K, S, G, U],
        ),
        D = r.useCallback(
            () =>
                null == M || null == K
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: K.value,
                          icon: M,
                      }),
            [K, M],
        ),
        F = r.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: k.intl.string(k.t["ETE/oC"]),
                    onClick: b,
                },
                {
                    variant: "primary",
                    text: k.intl.string(k.t["R3BPH+"]),
                    onClick: T,
                    disabled: E,
                },
            ],
            [T, E, b],
        );
    return (0, a.jsxs)(s.Modal, {
        title: k.intl.string(k.t.SNMXYt),
        transitionState: t,
        onClose: b,
        actions: F,
        actionBarInput:
            null != N
                ? (0, a.jsx)(c.Avr, {
                      text: k.intl.string(k.t.N86XcP),
                      onClick: w,
                      variant: "critical",
                  })
                : void 0,
        children: [
            (0, a.jsxs)("div", {
                className: I.formGroup,
                children: [
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [k.intl.string(k.t.nPa4Ju), (0, a.jsx)(j.Z, {})],
                    }),
                    (0, a.jsx)(u.d, {
                        value: K,
                        renderOptionPrefix: O,
                        options: B,
                        onChange: z,
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
                        color: "header-primary",
                        children: [k.intl.string(k.t["lFy+aW"]), (0, a.jsx)(j.Z, {})],
                    }),
                    (0, a.jsx)(c.oil, {
                        value: S,
                        onChange: P,
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
                        color: "header-primary",
                        children: k.intl.string(k.t.CnkilH),
                    }),
                    (0, a.jsx)(c.Kx8, {
                        value: U,
                        onChange: H,
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
                                color: "header-primary",
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
                            image: M,
                            makeURL: D,
                            icon: (0, a.jsx)(c.rG2, {
                                size: "md",
                                color: "currentColor",
                            }),
                            hideSize: !0,
                            onChange: X,
                            iconClassName: I.uploadImageIcon,
                            showIcon: null == M,
                        }),
                    }),
                ],
            }),
        ],
    });
}
