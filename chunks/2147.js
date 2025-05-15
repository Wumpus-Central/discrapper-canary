n.d(t, {
    G: () => eS,
    Z: () => ew
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(313361),
    o = n(697988),
    c = n(683860),
    d = n(442837),
    u = n(692547),
    h = n(780384),
    g = n(481060),
    m = n(787014),
    p = n(771340),
    f = n(410575),
    x = n(852860),
    j = n(129865),
    b = n(902840),
    v = n(429673),
    y = n(933557),
    C = n(541716),
    N = n(752305),
    S = n(893718),
    E = n(600164),
    O = n(313201),
    w = n(318766),
    Z = n(907040),
    T = n(906411),
    R = n(633302),
    I = n(109434),
    _ = n(162389),
    P = n(946458),
    A = n(968437),
    L = n(665906),
    D = n(456077),
    M = n(747212),
    k = n(210887),
    B = n(131704),
    V = n(314897),
    W = n(388610),
    G = n(430824),
    U = n(496675),
    H = n(903223),
    z = n(594174),
    F = n(934415),
    X = n(70956),
    J = n(630388),
    q = n(63063),
    $ = n(129724),
    Q = n(732335),
    Y = n(296146),
    K = n(564735),
    ee = n(981631),
    et = n(176505),
    en = n(185923),
    ei = n(710352),
    el = n(124368),
    er = n(388032),
    es = n(194512),
    ea = n(20493);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                eo(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = (0, O.hQ)(),
    eh = (0, O.hQ)(),
    eg = (0, O.hQ)(),
    em = (0, O.hQ)(),
    ep = (0, O.hQ)(),
    ef = (0, O.hQ)(),
    ex = (0, O.hQ)(),
    ej = (0, O.hQ)(),
    eb = (0, O.hQ)(),
    ev = (0, O.hQ)(),
    ey = (0, O.hQ)(),
    eC = (0, B.kt)({
        id: '1',
        type: ee.d4z.DM
    }),
    eN = 'AUTOMATIC_RTC_REGION',
    eS = d.ZP.connectStores([W.Z], () => {
        let { channel: e, submitting: t } = W.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, m.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                e.isThread() && (t = (0, D.Z)(t, !0)),
                    (0, m.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
                        locked: null == d ? void 0 : d.locked,
                        invitable: null == d ? void 0 : d.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: p,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    });
            }
        };
    })(x.Z);
function eE(e) {
    let { onEmojiPicked: t } = e,
        n = l.useRef(null),
        r = l.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(Z.Z, {
                    channel: null,
                    pickerIntention: en.Hz.CHANNEL_NAME,
                    closePopout: n,
                    onNavigateAway: n,
                    onSelectEmoji: (e, i) => {
                        null != e && e.type === T.B.UNICODE && t(e.surrogates), i && n();
                    },
                    showOnlyUnicode: !0
                });
            },
            [t]
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: n,
        renderPopout: r,
        animation: g.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(
                w.Z,
                ed(ec({}, e), {
                    ref: n,
                    active: l,
                    className: es.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10
                        }
                    }
                })
            );
        }
    });
}
class eO extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && p.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, N.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, $.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, $.A)(e * X.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, m;
        let p,
            x,
            { canManageChannels: j, canSendMessages: b, isThreadModerator: v, canManageThread: y, guild: N, isForumPost: E, isOwner: O, showAdvancedSlowModeSetting: w } = this.props,
            Z = B.Ec.has(e.type),
            T = e.isForumLikeChannel(),
            I = T && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            L = (null == (l = z.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            D = B.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              title: T ? er.intl.string(er.t.yR6Hwc) : er.intl.string(er.t.X8jMDg),
                              className: ea.marginTop20,
                              children: T
                                  ? (0, i.jsx)(S.Z, {
                                        innerClassName: es.forumGuidelines,
                                        characterCountClassName: es.forumGuidelinesCharacterCount,
                                        maxCharacterCount: et.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: er.intl.string(er.t['71fbmp']),
                                        channel: eC,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: C.Ie.FORUM_CHANNEL_GUIDELINES,
                                        onBlur: () => {
                                            this.setState({ topicFocused: !1 });
                                        },
                                        onFocus: () => {
                                            this.setState({ topicFocused: !0 });
                                        },
                                        focused: this.state.topicFocused,
                                        onSubmit: this.handleSubmit,
                                        disableThemedBackground: !0
                                    })
                                  : (0, i.jsx)(g.Kx8, {
                                        autoFocus: this.props.subsection === ee.ZfP.TOPIC,
                                        placeholder: er.intl.string(er.t['71fbmp']),
                                        value: R.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: et.$x,
                                        disabled: !j,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            k =
                T && L
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: er.intl.string(er.t.qk2jdX),
                                  className: ea.marginTop20,
                                  children: (0, i.jsx)(g.Kx8, {
                                      placeholder: er.intl.string(er.t.DDjD1N),
                                      value: R.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: ei.Vb,
                                      disabled: !j,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                          ]
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      error: this.getError('available_tags'),
                                      id: eu,
                                      className: es.formTitle,
                                      children: er.intl.string(er.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(g.R94, {
                                      id: eh,
                                      type: g.R94.Types.DESCRIPTION,
                                      className: es.description,
                                      children: er.intl.string(er.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(_.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(g.XZJ, {
                              disabled: !j || I,
                              value: e.hasFlag(et.zZ.REQUIRE_TAG),
                              type: g.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  children: er.intl.string(er.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: es.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(es.settingsLeft, es.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              id: eg,
                                              className: es.formTitle,
                                              children: er.intl.string(er.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              id: eh,
                                              type: g.R94.Types.DESCRIPTION,
                                              className: es.description,
                                              children: er.intl.string(er.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: es.buttonRow,
                                              children: [
                                                  (0, i.jsx)(g.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: g.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              g.zxk,
                                                              ed(ec({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !j,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: er.intl.string(er.t['59QgaG'])
                                                              })
                                                          )
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(g.zxk, {
                                                            className: es.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: g.zxk.Sizes.MIN,
                                                            look: g.zxk.Looks.LINK,
                                                            color: g.zxk.Colors.RED,
                                                            children: er.intl.string(er.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(P.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: es.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(es.settingsLeft, es.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(g.hjN, {
                                              title: er.intl.string(er.t.kQvoCw),
                                              children: (0, i.jsx)(g.q4e, {
                                                  options: [
                                                      {
                                                          label: er.intl.string(er.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: er.intl.string(er.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              className: ea.marginTop8,
                                              type: g.R94.Types.DESCRIPTION,
                                              children: er.intl.string(er.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(Y.Z, { className: es.defaultImageView }) : (0, i.jsx)(K.Z, { className: es.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            U = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: er.intl.string(er.t.gePre3),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: er.intl.string(er.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: er.intl.string(er.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ea.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: er.intl.string(er.t['165cVV'])
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: er.intl.string(er.t.Paxaur),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: er.intl.string(er.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: er.intl.string(er.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ea.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: er.intl.string(er.t.DqOl8P)
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            F = Z ? v : j,
            X = B.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: em,
                                      className: ea.marginBottom8,
                                      children: er.intl.string(er.t['tTHx9/'])
                                  }),
                                  T
                                      ? (0, i.jsx)(g.vwX, {
                                            className: ea.marginTop20,
                                            children: er.intl.string(er.t.O1c02t)
                                        })
                                      : null,
                                  !0 === w
                                      ? (0, i.jsx)(Q.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(g.iRW, {
                                            className: ea.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: ee.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !F,
                                            equidistant: !0,
                                            'aria-labelledby': em,
                                            'aria-describedby': ep
                                        }),
                                  (0, i.jsx)(g.R94, {
                                      id: ep,
                                      type: g.R94.Types.DESCRIPTION,
                                      children: T ? er.intl.string(er.t['a+1pdH']) : Z ? er.intl.string(er.t.OMmNCg) : er.intl.string(er.t['HEA/DQ'])
                                  }),
                                  T
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.vwX, {
                                                    className: ea.marginTop20,
                                                    children: er.intl.string(er.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(g.iRW, {
                                                    className: ea.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: ee.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !F,
                                                    equidistant: !0,
                                                    'aria-labelledby': em,
                                                    'aria-describedby': ep
                                                }),
                                                (0, i.jsx)(g.R94, {
                                                    type: g.R94.Types.DESCRIPTION,
                                                    children: er.intl.string(er.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            J =
                Z && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  children: (0, i.jsx)(f.Z, {
                                      page: ee.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(M.Z, {
                                          isDisabled: !y,
                                          autoArchiveDuration: null != (m = e.threadMetadata.autoArchiveDuration) ? m : el.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.R94, {
                                  className: ea.marginTop8,
                                  type: g.R94.Types.DESCRIPTION,
                                  children: E ? er.intl.string(er.t['3aJN9P']) : er.intl.string(er.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            $ =
                e.type === ee.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: er.intl.string(er.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !y,
                              children: er.intl.string(er.t.s2rpNT)
                          })
                      })
                    : null,
            en = B.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.j7V, {
                          note: er.intl.string(er.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !j || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? er.intl.string(er.t.l6uSVV) : null,
                          children: er.intl.string(er.t.Es25YW)
                      })
                  })
                : null,
            eo =
                B.Y0.has(e.type) && null != N && N.hasFeature(ee.oNc.NEWS) && e.id !== (null == N ? void 0 : N.rulesChannelId) && e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: er.intl.format(er.t.tI7KNT, { documentationLink: q.Z.getArticleURL(ee.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: ea.marginTop8,
                                          children: er.intl.string(er.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === ee.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !j,
                              children: er.intl.string(er.t.Au2b7u)
                          })
                      })
                    : null,
            ef = B.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                          (0, i.jsx)(f.Z, {
                              page: ee.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(M.Z, {
                                  isDisabled: !j,
                                  autoArchiveDuration: (0, A.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ea.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? er.intl.string(er.t.fyXclZ) : er.intl.string(er.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ex = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(g.j7V, {
                      note: er.intl.format(er.t.feJW19, { helpdeskArticle: q.Z.getArticleURL(ee.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(et.zZ.SUMMARIES_DISABLED) && (null == N ? void 0 : N.hasFeature(ee.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !j || !(null == N ? void 0 : N.hasFeature(ee.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: es.badgedItem,
                          children: [
                              er.intl.string(er.t.id3ozs),
                              (0, i.jsx)(g.IGR, {
                                  text: er.intl.string(er.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            ej = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                          (0, i.jsx)(g.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(et.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: er.intl.string(er.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !j,
                              children: er.intl.string(er.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === ee.d4z.GUILD_CATEGORY ? ((x = er.intl.string(er.t.OCAkGB)), (p = 'category-name')) : e.isForumPost() ? ((x = er.intl.string(er.t.uyVrTE)), (p = 'post-title')) : Z ? ((x = er.intl.string(er.t.j3XWjI)), (p = 'thread-name')) : ((x = er.intl.string(er.t.PVbHDg)), (p = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.xJW, {
                        title: x,
                        children: this.props.isEmojiInChannelNamesEnabled
                            ? (0, i.jsxs)('div', {
                                  className: es.nameInput,
                                  children: [
                                      (0, i.jsx)(g.oil, {
                                          inputRef: this.nameInputRef,
                                          value: t,
                                          onChange: this.handleChangeName,
                                          onBlur: this.handleBlurName,
                                          error: this.getError('name'),
                                          name: p,
                                          autoFocus: !0,
                                          disabled: O ? !b : !j,
                                          maxLength: ee.HN8,
                                          className: es.nameInputWrapperWithEmojiPicker,
                                          inputClassName: es.nameInputInnerWithEmojiPicker,
                                          focusProps: { offset: { right: -30 } }
                                      }),
                                      (0, i.jsx)(eE, { onEmojiPicked: this.insertEmojiAtPosition })
                                  ]
                              })
                            : (0, i.jsx)(g.oil, {
                                  inputRef: this.nameInputRef,
                                  value: t,
                                  onChange: this.handleChangeName,
                                  onBlur: this.handleBlurName,
                                  error: this.getError('name'),
                                  name: p,
                                  autoFocus: !0,
                                  disabled: O ? !b : !j,
                                  maxLength: ee.HN8
                              })
                    }),
                    (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                    D,
                    k,
                    V,
                    W,
                    X,
                    J,
                    G,
                    U,
                    H,
                    $,
                    en,
                    eo,
                    ex,
                    ef,
                    ej
                ]
            })
        );
    }
    renderBitrate(e) {
        return ''.concat(Math.round(e / 1000), 'kbps');
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, F.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: ef,
                    children: er.intl.string(er.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(g.R94, {
                        id: ex,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ea.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [ee.Fc, ee.epw, l],
                    minValue: ee.Fc,
                    maxValue: l,
                    keyboardStep: ee.V7H,
                    disabled: !n,
                    'aria-labelledby': ef,
                    'aria-describedby': null != r && '' !== r ? ex : ej
                }),
                l > ee.epw
                    ? (0, i.jsx)(g.R94, {
                          id: ej,
                          type: g.geA.DESCRIPTION,
                          children: er.intl.format(er.t.SbQJk5, { bitrate: ee.epw / 1000 })
                      })
                    : null
            ]
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            B.vg.has(e.type) &&
            (e.isGuildVocal() ||
                L.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: '9b50bd_1'
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            {
                value: ee.Ucd.AUTO,
                name: er.intl.string(er.t.jjKYpq)
            },
            {
                value: ee.Ucd.FULL,
                name: er.intl.string(er.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: er.intl.string(er.t.jhJEJi),
                    children: (0, i.jsx)(g.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : ee.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: er.intl.format(er.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? er.intl.string(er.t.XX5ciY) : er.intl.formatToPlainString(er.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? ee.xGv : ee.$pe;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: eb,
                    children: er.intl.string(er.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(g.R94, {
                        id: ev,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ea.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': eb,
                    'aria-describedby': null != n && '' !== n ? ev : ey
                }),
                (0, i.jsx)(g.R94, {
                    id: ey,
                    type: g.geA.DESCRIPTION,
                    children: er.intl.format(e.isGuildStageVoice() ? er.t.OqZI8P : er.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: er.intl.string(er.t.JEmsam),
                value: eN
            });
        let a = null != (t = e.rtcRegion) ? t : eN;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(g.vwX, { children: er.intl.string(er.t.Ms8bX1) }),
                (0, i.jsx)(g.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: er.intl.string(er.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === ee.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(E.Z, {
                justify: E.Z.Justify.CENTER,
                className: ea.marginTop60,
                children: (0, i.jsx)('img', {
                    alt: '',
                    width: 280,
                    height: 165,
                    src: t
                })
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(g.hjN, {
                  className: 'channel-settings-overview',
                  tag: g.RB0.H1,
                  title: er.intl.string(er.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            eo(this, 'defaultReactionButtonRef', l.createRef()),
            eo(this, 'nameInputRef', l.createRef()),
            eo(this, 'cursorPosition', 0),
            eo(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: en.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            eo(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, et.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            eo(this, 'handleChangeName', (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, D.Z)(e, !1)) : ee.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, F.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                (0, m.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0);
            }),
            eo(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, D.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            eo(this, 'insertEmojiAtPosition', (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                (0, m.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        null == i || i.focus(), null == i || i.setSelectionRange(t, t);
                    }, 0);
            }),
            eo(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eo(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            eo(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eo(this, 'handleChangeDefaultReactionEmoji', (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence
                            };
                (0, m.pW)({ defaultReactionEmoji: t });
            }),
            eo(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            eo(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            eo(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultTagSetting: e });
            }),
            eo(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eo(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            eo(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            eo(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, et.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            eo(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? ee.d4z.GUILD_ANNOUNCEMENT : ee.d4z.GUILD_TEXT });
            }),
            eo(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            eo(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            eo(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            eo(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === eN ? null : e });
            }),
            eo(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            eo(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            eo(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            eo(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, et.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            eo(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, et.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, m.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, N.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1
        };
    }
}
function ew() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([W.Z], () => W.Z.getProps()),
        s = (0, d.e7)([H.Z], () => {
            var e;
            return H.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([k.Z], () => k.Z.theme),
        o = (0, d.e7)([G.Z], () => G.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, L.C7)(t),
        u = (0, L.Xb)(t),
        { canManageChannels: h, canSendMessages: g } = (0, d.cj)([U.Z], () => ({
            canManageChannels: U.Z.can(ee.Plq.MANAGE_CHANNELS, t),
            canSendMessages: U.Z.can(ee.Plq.SEND_MESSAGES, t)
        })),
        m = (0, y.ZP)(t),
        p = V.default.getId(),
        f = (0, I.v)(),
        x = null == t ? void 0 : t.id,
        C = (0, b.ts)(t, !1, !0),
        N = j.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = (0, v.sc)({
            guildId: null == o ? void 0 : o.id,
            location: 'ChannelSettingsOverview'
        }),
        E = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(eO, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: g,
        isThreadModerator: u,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: E,
        showChannelSummariesSettings: C,
        showAdvancedSlowModeSetting: N,
        isEmojiInChannelNamesEnabled: S
    });
}
