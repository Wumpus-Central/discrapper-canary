l.d(n, { default: () => _ }), l(388685), l(953529);
var a = l(951288),
    r = l(647438),
    i = l(658722),
    t = l.n(i),
    s = l(399606),
    o = l(257465),
    c = l(369585),
    d = l(159691),
    u = l(481060),
    m = l(471445),
    h = l(734893),
    x = l(208567),
    p = l(592125),
    g = l(984933),
    v = l(430824),
    j = l(768581),
    C = l(969632),
    k = l(580357),
    I = l(388032),
    b = l(353441);
function f(e, n, l, a) {
    return {
        channelId: e.value,
        title: n,
        description: l,
        emoji: null,
        icon: null != a ? a : null,
    };
}
function _(e) {
    var n, l;
    let { transitionState: i, onClose: _, resourceChannel: N, guildId: Z, onSave: y, onDelete: G, onIconUpload: S } = e,
        [X, P] = r.useState(null != (n = null == N ? void 0 : N.title) ? n : ""),
        [U, B] = r.useState(null != (l = null == N ? void 0 : N.description) ? l : ""),
        [R, W] = r.useState(
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
        q = (0, s.e7)([C.Z], () => {
            var e;
            return null == (e = C.Z.getResourceChannel(null == N ? void 0 : N.channelId)) ? void 0 : e.icon;
        }),
        H = (0, s.Wu)([C.Z], () => {
            var e, n;
            return (null != (n = null == (e = C.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map(
                (e) => e.channelId,
            );
        }),
        K = X.length < h.n || null == R,
        L = r.useCallback(() => {
            null == R || X.length <= 0 || (y(f(R, X, U, q)), _());
        }, [y, _, X, R, q, U]),
        O = r.useCallback(() => {
            null == G || G(), _();
        }, [G, _]),
        E = r.useCallback(
            (e) => {
                W(e);
            },
            [W],
        ),
        J = r.useCallback(
            (e) =>
                Promise.resolve(
                    g.ZP.getSelectableChannels(Z)
                        .filter((n) => (0, h.k3)(n.channel) && !H.includes(n.channel.id) && t()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [Z, H],
        ),
        T = r.useCallback(
            (e) => {
                if (null == e || null == Z) return null;
                let n = p.Z.getChannel(e.value),
                    l = v.Z.getGuild(Z);
                if (null == n || null == l) return null;
                let r = (0, m.KS)(n, l);
                return null == r
                    ? null
                    : (0, a.jsx)(r, {
                          size: "xs",
                          color: "currentColor",
                          className: b.channelIcon,
                      });
            },
            [Z],
        ),
        w = r.useCallback(
            (e) => {
                null != S && null != R && S(f(R, X, U), e);
            },
            [R, X, S, U],
        ),
        z = r.useCallback(
            () =>
                null == q || null == R
                    ? null
                    : j.ZP.getResourceChannelIconURL({
                          channelId: R.value,
                          icon: q,
                      }),
            [R, q],
        ),
        F = r.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: I.intl.string(I.t["ETE/oK"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: I.intl.string(I.t.R3BPHx),
                    onClick: L,
                    disabled: K,
                },
            ],
            [L, K, _],
        );
    return (0, a.jsxs)(o.IX, {
        transitionState: i,
        onClose: _,
        children: [
            (0, a.jsx)("div", {
                className: b.closeButton,
                children: (0, a.jsx)(d.PZ7, { onClick: _ }),
            }),
            (0, a.jsxs)("div", {
                className: b.containerWithHeader,
                children: [
                    (0, a.jsx)("div", {
                        className: b.splitGroup,
                        children: (0, a.jsx)("div", {
                            className: b.header,
                            children: (0, a.jsx)(u.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: I.intl.string(I.t.iREYFB),
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsxs)(u.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [I.intl.string(I.t.nPa4Ji), (0, a.jsx)(k.Z, {})],
                            }),
                            (0, a.jsx)(u.VcW, {
                                value: R,
                                renderOptionPrefix: T,
                                options: J,
                                onChange: E,
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: I.intl.string(I.t.eNDtJC),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: b.separator }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsxs)(u.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [I.intl.string(I.t["lFy+aW"]), (0, a.jsx)(k.Z, {})],
                            }),
                            (0, a.jsx)(u.oil, {
                                value: X,
                                onChange: P,
                                placeholder: I.intl.string(I.t.XKUimJ),
                                maxLength: h.am,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: b.separator }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsx)(u.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: I.intl.string(I.t.CnkilJ),
                            }),
                            (0, a.jsx)(u.Kx8, {
                                value: U,
                                onChange: B,
                                placeholder: I.intl.string(I.t.na0V4O),
                                maxLength: h.Vu,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: b.separator }),
                    (0, a.jsxs)("div", {
                        className: b.splitGroup,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(u.X6q, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: I.intl.string(I.t.CB6dys),
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: I.intl.string(I.t.Kcdk7O),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(x.Z, {
                                    className: b.uploader,
                                    imageClassName: b.uploadImage,
                                    image: q,
                                    makeURL: z,
                                    icon: (0, a.jsx)(u.rG2, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                    hideSize: !0,
                                    onChange: w,
                                    iconClassName: b.uploadImageIcon,
                                    showIcon: null == q,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.G, {
                actions: F,
                leading:
                    null != N
                        ? (0, a.jsx)(u.Avr, {
                              text: I.intl.string(I.t.N86XcH),
                              variant: "critical",
                              onClick: O,
                          })
                        : void 0,
            }),
        ],
    });
}
