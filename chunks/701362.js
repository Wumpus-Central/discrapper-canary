(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    p = n(576855),
    f = n(258609),
    m = n(199902),
    g = n(314897),
    b = n(430824),
    _ = n(496675),
    v = n(158776),
    h = n(979651),
    y = n(626135),
    O = n(102172),
    j = n(687516),
    S = n(718805),
    x = n(871118),
    I = n(981631),
    P = n(388032),
    C = n(768780);
class E extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        y.default.track(I.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: l, unavailableReason: o } = this.props;
        return (0, r.jsxs)(s.P3F, {
            onClick: t,
            className: C.previewContainer,
            children: [
                (0, r.jsx)(x.Z, {
                    className: C.previewImage,
                    stream: e
                }),
                l
                    ? (0, r.jsx)('div', {
                          className: C.previewHover,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: C.white,
                              children: (0, S.Z)(e, n, i, o)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: l, hideTip: a } = this.props;
        return null == n
            ? null
            : (0, r.jsx)('div', {
                  className: o()(C.streamPreviewWrapper, { [C.mounted]: i }),
                  children: (0, r.jsxs)('div', {
                      className: C.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)('div', {
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
                                                    page: I.ZY5.GO_LIVE_MODAL,
                                                    section: I.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: l
                                        })
                                      : (0, r.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: C.activityActions,
                                            color: C.watchButton,
                                            onAction: l
                                        }),
                                  !a &&
                                      (0, r.jsx)(p.Z, {
                                          type: p.Z.Types.INLINE,
                                          className: C.protip,
                                          children: __OVERLAY__ ? P.intl.string(P.t['YRdw7+']) : P.intl.string(P.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function w(e) {
    var t,
        n,
        { user: l, channel: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['user', 'channel']);
    let [c, d] = (0, a.Wu)([h.Z, b.Z, _.Z, f.Z], () => (0, O.p9)(o, h.Z, b.Z, _.Z, f.Z)),
        p = (0, a.e7)([m.Z], () => m.Z.getStreamForUser(l.id, o.getGuildId())),
        y = (0, a.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(p)),
        S = (0, a.e7)([g.default], () => g.default.getId()),
        x = (0, j.Cf)(p),
        I = (0, a.e7)([v.Z], () => (0, j.Um)(p, v.Z)),
        P = i.useMemo(() => ({ [o.guild_id]: [l.id] }), [o.guild_id, l.id]);
    return (
        (0, u.$)(P),
        (0, r.jsx)(
            E,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, s)),
            (n = n =
                {
                    canWatch: c,
                    unavailableReason: d,
                    user: l,
                    streamApplication: x,
                    stream: p,
                    activeStream: y,
                    currentUserId: S,
                    activity: I
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
}
