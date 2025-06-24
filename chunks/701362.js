n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    f = n(576855),
    p = n(258609),
    m = n(199902),
    g = n(314897),
    _ = n(430824),
    b = n(496675),
    v = n(158776),
    h = n(979651),
    y = n(626135),
    O = n(102172),
    j = n(687516),
    S = n(718805),
    x = n(871118),
    I = n(981631),
    C = n(388032),
    P = n(768780);
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
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: l, unavailableReason: a } = this.props;
        return (0, r.jsxs)(s.P3F, {
            onClick: t,
            className: P.previewContainer,
            children: [
                (0, r.jsx)(x.Z, {
                    className: P.previewImage,
                    stream: e
                }),
                l
                    ? (0, r.jsx)('div', {
                          className: P.previewHover,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: P.white,
                              children: (0, S.Z)(e, n, i, a)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: l, hideTip: o } = this.props;
        return null == n
            ? null
            : (0, r.jsx)('div', {
                  className: a()(P.streamPreviewWrapper, { [P.mounted]: i }),
                  children: (0, r.jsxs)('div', {
                      className: P.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)('div', {
                              className: P.body,
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
                                            className: P.activityActions,
                                            color: P.watchButton,
                                            onAction: l
                                        }),
                                  !o &&
                                      (0, r.jsx)(f.Z, {
                                          type: f.Z.Types.INLINE,
                                          className: P.protip,
                                          children: __OVERLAY__ ? C.intl.string(C.t['YRdw7+']) : C.intl.string(C.t.CCTgbG)
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
        { user: l, channel: a } = e,
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['user', 'channel']);
    let [c, d] = (0, o.Wu)([h.Z, _.Z, b.Z, p.Z], () => (0, O.p9)(a, h.Z, _.Z, b.Z, p.Z)),
        f = (0, o.e7)([m.Z], () => m.Z.getStreamForUser(l.id, a.getGuildId())),
        y = (0, o.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(f)),
        S = (0, o.e7)([g.default], () => g.default.getId()),
        x = (0, j.Cf)(f),
        I = (0, o.e7)([v.Z], () => (0, j.Um)(f, v.Z)),
        C = i.useMemo(() => ({ [a.guild_id]: [l.id] }), [a.guild_id, l.id]);
    return (
        (0, u.$)(C),
        (0, r.jsx)(
            E,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, s)),
            (n = n =
                {
                    canWatch: c,
                    unavailableReason: d,
                    user: l,
                    streamApplication: x,
                    stream: f,
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
