l.d(n, { default: () => _ }), l(388685), l(953529);
var a = l(54381),
    i = l(473749),
    r = l(658722),
    t = l.n(r),
    s = l(793030),
    o = l(399606),
    c = l(668339),
    d = l(159691),
    u = l(481060),
    m = l(471445),
    h = l(734893),
    p = l(208567),
    x = l(592125),
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
    let { transitionState: r, onClose: _, resourceChannel: N, guildId: Z, onSave: y, onDelete: G, onIconUpload: H } = e,
        [P, S] = i.useState(null != (n = null == N ? void 0 : N.title) ? n : ""),
        [U, R] = i.useState(null != (l = null == N ? void 0 : N.description) ? l : ""),
        [B, E] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = x.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: n.id,
                          label: n.name,
                      };
            })(N),
        ),
        K = (0, o.e7)([C.Z], () => {
            var e;
            return null == (e = C.Z.getResourceChannel(null == N ? void 0 : N.channelId)) ? void 0 : e.icon;
        }),
        L = (0, o.Wu)([C.Z], () => {
            var e, n;
            return (null != (n = null == (e = C.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map(
                (e) => e.channelId,
            );
        }),
        W = P.length < h.n || null == B,
        T = i.useCallback(() => {
            null == B || P.length <= 0 || (y(f(B, P, U, K)), _());
        }, [y, _, P, B, K, U]),
        w = i.useCallback(() => {
            null == G || G(), _();
        }, [G, _]),
        z = i.useCallback(
            (e) => {
                E(e);
            },
            [E],
        ),
        F = i.useCallback(
            (e) =>
                Promise.resolve(
                    g.ZP.getSelectableChannels(Z)
                        .filter((n) => (0, h.k3)(n.channel) && !L.includes(n.channel.id) && t()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [Z, L],
        ),
        M = i.useCallback(
            (e) => {
                if (null == e || null == Z) return null;
                let n = x.Z.getChannel(e.value),
                    l = v.Z.getGuild(Z);
                if (null == n || null == l) return null;
                let i = (0, m.KS)(n, l);
                return null == i
                    ? null
                    : (0, a.jsx)(i, {
                          size: "xs",
                          color: "currentColor",
                          className: b.channelIcon,
                      });
            },
            [Z],
        ),
        O = i.useCallback(
            (e) => {
                null != H && null != B && H(f(B, P, U), e);
            },
            [B, P, H, U],
        ),
        X = i.useCallback(
            () =>
                null == K || null == B
                    ? null
                    : j.ZP.getResourceChannelIconURL({
                          channelId: B.value,
                          icon: K,
                      }),
            [B, K],
        ),
        D = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: I.intl.string(I.t["ETE/oC"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: I.intl.string(I.t["R3BPH+"]),
                    onClick: T,
                    disabled: W,
                },
            ],
            [T, W, _],
        );
    return (0, a.jsxs)(s.IX, {
        transitionState: r,
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
                            children: (0, a.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: I.intl.string(I.t.iREYFC),
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsxs)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [I.intl.string(I.t.nPa4Ju), (0, a.jsx)(k.Z, {})],
                            }),
                            (0, a.jsx)(c.d, {
                                value: B,
                                renderOptionPrefix: M,
                                options: F,
                                onChange: z,
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: I.intl.string(I.t.eNDtJK),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: b.separator }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsxs)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [I.intl.string(I.t["lFy+aW"]), (0, a.jsx)(k.Z, {})],
                            }),
                            (0, a.jsx)(u.oil, {
                                value: P,
                                onChange: S,
                                placeholder: I.intl.string(I.t.XKUimI),
                                maxLength: h.am,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: b.separator }),
                    (0, a.jsxs)("div", {
                        className: b.formGroup,
                        children: [
                            (0, a.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: I.intl.string(I.t.CnkilH),
                            }),
                            (0, a.jsx)(u.Kx8, {
                                value: U,
                                onChange: R,
                                placeholder: I.intl.string(I.t.na0V4E),
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
                                    (0, a.jsx)(u.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: I.intl.string(I.t.CB6dyu),
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: I.intl.string(I.t.Kcdk7D),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(p.Z, {
                                    className: b.uploader,
                                    imageClassName: b.uploadImage,
                                    image: K,
                                    makeURL: X,
                                    icon: (0, a.jsx)(u.rG2, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                    hideSize: !0,
                                    onChange: O,
                                    iconClassName: b.uploadImageIcon,
                                    showIcon: null == K,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(s.Go$, {
                actions: D,
                leading:
                    null != N
                        ? (0, a.jsx)(u.Avr, {
                              text: I.intl.string(I.t.N86XcP),
                              variant: "critical",
                              onClick: w,
                          })
                        : void 0,
            }),
        ],
    });
}
