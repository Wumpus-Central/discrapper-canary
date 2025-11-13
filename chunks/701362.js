n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    f = n(576855),
    _ = n(258609),
    p = n(199902),
    h = n(314897),
    m = n(430824),
    g = n(496675),
    E = n(158776),
    b = n(979651),
    y = n(626135),
    O = n(102172),
    v = n(687516),
    I = n(718805),
    T = n(871118),
    S = n(981631),
    A = n(388032),
    C = n(839021);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class L extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        y.default.track(S.rMx.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: a, unavailableReason: o } = this.props;
        return (0, r.jsxs)(l.P3F, {
            onClick: t,
            className: C.previewContainer,
            children: [
                (0, r.jsx)(T.Z, {
                    className: C.previewImage,
                    stream: e,
                }),
                a
                    ? (0, r.jsx)("div", {
                          className: C.previewHover,
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "none",
                              className: C.white,
                              children: (0, I.Z)(e, n, i, o),
                          }),
                      })
                    : null,
            ],
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: a, hideTip: s } = this.props;
        return null == n
            ? null
            : (0, r.jsx)("div", {
                  className: o()(C.streamPreviewWrapper, { [C.mounted]: i }),
                  children: (0, r.jsxs)("div", {
                      className: C.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)("div", {
                              className: C.body,
                              children: [
                                  null != e
                                      ? (0, r.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: S.ZY5.GO_LIVE_MODAL,
                                                    section: S.jXE.STREAM_VIEWER_POPOUT,
                                                },
                                            },
                                            onAction: a,
                                        })
                                      : (0, r.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: C.activityActions,
                                            onAction: a,
                                        }),
                                  !s &&
                                      (0, r.jsx)(f.Z, {
                                          type: f.Z.Types.INLINE,
                                          className: C.protip,
                                          children: __OVERLAY__ ? A.intl.string(A.t.YRdw70) : A.intl.string(A.t.CCTgbF),
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function M(e) {
    var { user: t, channel: n } = e,
        a = w(e, ["user", "channel"]);
    let [o, l] = (0, s.Wu)([b.Z, m.Z, g.Z, _.default], () => (0, O.p9)(n, b.Z, m.Z, g.Z, _.default)),
        c = (0, s.e7)([p.Z], () => p.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([p.Z], () => p.Z.getActiveStreamForApplicationStream(c)),
        f = (0, s.e7)([h.default], () => h.default.getId()),
        y = (0, v.Cf)(c),
        I = (0, s.e7)([E.Z], () => (0, v.Um)(c, E.Z)),
        T = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(T, "StreamPreviewPopout"),
        (0, r.jsx)(
            L,
            D(R({}, a), {
                canWatch: o,
                unavailableReason: l,
                user: t,
                streamApplication: y,
                stream: c,
                activeStream: d,
                currentUserId: f,
                activity: I,
            }),
        )
    );
}
