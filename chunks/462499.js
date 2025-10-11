l.d(n, { default: () => f }), l(388685), l(953529);
var a = l(951288),
    i = l(647438),
    r = l(658722),
    t = l.n(r),
    s = l(793030),
    o = l(399606),
    c = l(159691),
    d = l(481060),
    u = l(471445),
    m = l(734893),
    h = l(208567),
    x = l(592125),
    p = l(984933),
    g = l(430824),
    v = l(768581),
    j = l(969632),
    C = l(580357),
    k = l(388032),
    I = l(353441);
function b(e, n, l, a) {
    return {
        channelId: e.value,
        title: n,
        description: l,
        emoji: null,
        icon: null != a ? a : null,
    };
}
function f(e) {
    var n, l;
    let { transitionState: r, onClose: f, resourceChannel: _, guildId: N, onSave: Z, onDelete: y, onIconUpload: G } = e,
        [H, S] = i.useState(null != (n = null == _ ? void 0 : _.title) ? n : ""),
        [P, U] = i.useState(null != (l = null == _ ? void 0 : _.description) ? l : ""),
        [B, R] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = x.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: n.id,
                          label: n.name,
                      };
            })(_),
        ),
        W = (0, o.e7)([j.Z], () => {
            var e;
            return null == (e = j.Z.getResourceChannel(null == _ ? void 0 : _.channelId)) ? void 0 : e.icon;
        }),
        K = (0, o.Wu)([j.Z], () => {
            var e, n;
            return (null != (n = null == (e = j.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map(
                (e) => e.channelId,
            );
        }),
        L = H.length < m.n || null == B,
        O = i.useCallback(() => {
            null == B || H.length <= 0 || (Z(b(B, H, P, W)), f());
        }, [Z, f, H, B, W, P]),
        E = i.useCallback(() => {
            null == y || y(), f();
        }, [y, f]),
        J = i.useCallback(
            (e) => {
                R(e);
            },
            [R],
        ),
        T = i.useCallback(
            (e) =>
                Promise.resolve(
                    p.ZP.getSelectableChannels(N)
                        .filter((n) => (0, m.k3)(n.channel) && !K.includes(n.channel.id) && t()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [N, K],
        ),
        w = i.useCallback(
            (e) => {
                if (null == e || null == N) return null;
                let n = x.Z.getChannel(e.value),
                    l = g.Z.getGuild(N);
                if (null == n || null == l) return null;
                let i = (0, u.KS)(n, l);
                return null == i
                    ? null
                    : (0, a.jsx)(i, {
                          size: "xs",
                          color: "currentColor",
                          className: I.channelIcon,
                      });
            },
            [N],
        ),
        z = i.useCallback(
            (e) => {
                null != G && null != B && G(b(B, H, P), e);
            },
            [B, H, G, P],
        ),
        F = i.useCallback(
            () =>
                null == W || null == B
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: B.value,
                          icon: W,
                      }),
            [B, W],
        ),
        M = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: k.intl.string(k.t["ETE/oK"]),
                    onClick: f,
                },
                {
                    variant: "primary",
                    text: k.intl.string(k.t.R3BPHx),
                    onClick: O,
                    disabled: L,
                },
            ],
            [O, L, f],
        );
    return (0, a.jsxs)(s.IX, {
        transitionState: r,
        onClose: f,
        children: [
            (0, a.jsx)("div", {
                className: I.closeButton,
                children: (0, a.jsx)(c.PZ7, { onClick: f }),
            }),
            (0, a.jsxs)("div", {
                className: I.containerWithHeader,
                children: [
                    (0, a.jsx)("div", {
                        className: I.splitGroup,
                        children: (0, a.jsx)("div", {
                            className: I.header,
                            children: (0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: k.intl.string(k.t.iREYFB),
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, a.jsxs)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t.nPa4Ji), (0, a.jsx)(C.Z, {})],
                            }),
                            (0, a.jsx)(d.VcW, {
                                value: B,
                                renderOptionPrefix: w,
                                options: T,
                                onChange: J,
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: k.intl.string(k.t.eNDtJC),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: I.separator }),
                    (0, a.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, a.jsxs)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t["lFy+aW"]), (0, a.jsx)(C.Z, {})],
                            }),
                            (0, a.jsx)(d.oil, {
                                value: H,
                                onChange: S,
                                placeholder: k.intl.string(k.t.XKUimJ),
                                maxLength: m.am,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: I.separator }),
                    (0, a.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: k.intl.string(k.t.CnkilJ),
                            }),
                            (0, a.jsx)(d.Kx8, {
                                value: P,
                                onChange: U,
                                placeholder: k.intl.string(k.t.na0V4O),
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
                                    (0, a.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: k.intl.string(k.t.CB6dys),
                                    }),
                                    (0, a.jsx)(d.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: k.intl.string(k.t.Kcdk7O),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(h.Z, {
                                    className: I.uploader,
                                    imageClassName: I.uploadImage,
                                    image: W,
                                    makeURL: F,
                                    icon: (0, a.jsx)(d.rG2, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                    hideSize: !0,
                                    onChange: z,
                                    iconClassName: I.uploadImageIcon,
                                    showIcon: null == W,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(s.Go$, {
                actions: M,
                leading:
                    null != _
                        ? (0, a.jsx)(d.Avr, {
                              text: k.intl.string(k.t.N86XcH),
                              variant: "critical",
                              onClick: E,
                          })
                        : void 0,
            }),
        ],
    });
}
