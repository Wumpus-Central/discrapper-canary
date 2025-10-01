l.d(n, { default: () => f }), l(388685), l(953529);
var a = l(951288),
    r = l(647438),
    i = l(658722),
    t = l.n(i),
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
    let { transitionState: i, onClose: f, resourceChannel: _, guildId: N, onSave: Z, onDelete: y, onIconUpload: G } = e,
        [S, X] = r.useState(null != (n = null == _ ? void 0 : _.title) ? n : ""),
        [P, U] = r.useState(null != (l = null == _ ? void 0 : _.description) ? l : ""),
        [B, R] = r.useState(
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
        q = (0, o.Wu)([j.Z], () => {
            var e, n;
            return (null != (n = null == (e = j.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map(
                (e) => e.channelId,
            );
        }),
        H = S.length < m.n || null == B,
        K = r.useCallback(() => {
            null == B || S.length <= 0 || (Z(b(B, S, P, W)), f());
        }, [Z, f, S, B, W, P]),
        L = r.useCallback(() => {
            null == y || y(), f();
        }, [y, f]),
        O = r.useCallback(
            (e) => {
                R(e);
            },
            [R],
        ),
        E = r.useCallback(
            (e) =>
                Promise.resolve(
                    p.ZP.getSelectableChannels(N)
                        .filter((n) => (0, m.k3)(n.channel) && !q.includes(n.channel.id) && t()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [N, q],
        ),
        J = r.useCallback(
            (e) => {
                if (null == e || null == N) return null;
                let n = x.Z.getChannel(e.value),
                    l = g.Z.getGuild(N);
                if (null == n || null == l) return null;
                let r = (0, u.KS)(n, l);
                return null == r
                    ? null
                    : (0, a.jsx)(r, {
                          size: "xs",
                          color: "currentColor",
                          className: I.channelIcon,
                      });
            },
            [N],
        ),
        T = r.useCallback(
            (e) => {
                null != G && null != B && G(b(B, S, P), e);
            },
            [B, S, G, P],
        ),
        w = r.useCallback(
            () =>
                null == W || null == B
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: B.value,
                          icon: W,
                      }),
            [B, W],
        ),
        z = r.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: k.intl.string(k.t["ETE/oK"]),
                    onClick: f,
                },
                {
                    variant: "primary",
                    text: k.intl.string(k.t.R3BPHx),
                    onClick: K,
                    disabled: H,
                },
            ],
            [K, H, f],
        );
    return (0, a.jsxs)(s.IX, {
        transitionState: i,
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
                            children: (0, a.jsx)(d.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: k.intl.string(k.t.iREYFB),
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, a.jsxs)(d.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t.nPa4Ji), (0, a.jsx)(C.Z, {})],
                            }),
                            (0, a.jsx)(d.VcW, {
                                value: B,
                                renderOptionPrefix: J,
                                options: E,
                                onChange: O,
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
                            (0, a.jsxs)(d.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t["lFy+aW"]), (0, a.jsx)(C.Z, {})],
                            }),
                            (0, a.jsx)(d.oil, {
                                value: S,
                                onChange: X,
                                placeholder: k.intl.string(k.t.XKUimJ),
                                maxLength: m.am,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: I.separator }),
                    (0, a.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, a.jsx)(d.X6q, {
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
                                    (0, a.jsx)(d.X6q, {
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
                                    makeURL: w,
                                    icon: (0, a.jsx)(d.rG2, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                    hideSize: !0,
                                    onChange: T,
                                    iconClassName: I.uploadImageIcon,
                                    showIcon: null == W,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(s.Go$, {
                actions: z,
                leading:
                    null != _
                        ? (0, a.jsx)(d.Avr, {
                              text: k.intl.string(k.t.N86XcH),
                              variant: "critical",
                              onClick: L,
                          })
                        : void 0,
            }),
        ],
    });
}
