(n.d(t, {
    G: () => ew,
    Z: () => eI
}),
    n(997841),
    n(953529),
    n(290780));
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
    g = n(755721),
    m = n(481060),
    p = n(787014),
    f = n(771340),
    x = n(410575),
    j = n(852860),
    b = n(129865),
    v = n(902840),
    y = n(622822),
    C = n(933557),
    N = n(541716),
    S = n(752305),
    O = n(893718),
    E = n(600164),
    T = n(313201),
    w = n(318766),
    Z = n(907040),
    R = n(906411),
    I = n(633302),
    _ = n(109434),
    P = n(162389),
    A = n(946458),
    L = n(968437),
    D = n(665906),
    M = n(456077),
    k = n(747212),
    B = n(210887),
    V = n(131704),
    U = n(601964),
    H = n(314897),
    W = n(388610),
    G = n(430824),
    F = n(496675),
    z = n(903223),
    X = n(594174),
    Y = n(934415),
    J = n(70956),
    q = n(630388),
    $ = n(63063),
    Q = n(129724),
    K = n(732335),
    ee = n(296146),
    et = n(564735),
    en = n(981631),
    ei = n(176505),
    el = n(185923),
    er = n(710352),
    es = n(124368),
    ea = n(388032),
    eo = n(194512),
    ec = n(20493);
function ed(e, t, n) {
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
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                ed(e, t, n[t]);
            }));
    }
    return e;
}
function eh(e, t) {
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
let eg = (0, T.hQ)(),
    em = (0, T.hQ)(),
    ep = (0, T.hQ)(),
    ef = (0, T.hQ)(),
    ex = (0, T.hQ)(),
    ej = (0, T.hQ)(),
    eb = (0, T.hQ)(),
    ev = (0, T.hQ)(),
    ey = (0, T.hQ)(),
    eC = (0, T.hQ)(),
    eN = (0, T.hQ)(),
    eS = (0, V.kt)({
        id: '1',
        type: en.d4z.DM
    }),
    eO = {
        popoutLocation: {
            page: en.ZY5.CHANNEL_SETTINGS,
            section: en.jXE.CHANNEL_DEFAULT_REACTION,
            object: en.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eE = {
        popoutLocation: {
            page: en.ZY5.CHANNEL_SETTINGS,
            section: en.jXE.CHANNEL_NAME,
            object: en.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eT = 'AUTOMATIC_RTC_REGION',
    ew = d.ZP.connectStores([W.Z], () => {
        let { channel: e, submitting: t } = W.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, p.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: m, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                (e.isThread() && (t = (0, M.Z)(t, !0)),
                    (0, p.wk)(e.id, {
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
                        videoQualityMode: m,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    }));
            }
        };
    })(j.Z);
function eZ(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(Z.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: el.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === R.B.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eE
                });
            },
            [n, r, t]
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                w.Z,
                eh(eu({}, e), {
                    ref: s,
                    active: n,
                    className: eo.emojiButton,
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
class eR extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && f.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, S.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, Q.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, Q.A)(e * J.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, p;
        let f,
            j,
            { canManageChannels: b, canSendMessages: v, isThreadModerator: C, canManageThread: S, guild: E, isForumPost: T, isOwner: w, showAdvancedSlowModeSetting: Z } = this.props,
            R = V.Ec.has(e.type),
            _ = e.isForumLikeChannel(),
            D = _ && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            M = (null == (l = X.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            B = V.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              title: _ ? ea.intl.string(ea.t.yR6Hwc) : ea.intl.string(ea.t.X8jMDg),
                              className: ec.marginTop20,
                              children: (0, i.jsx)(O.ZP, {
                                  innerClassName: eo.topic,
                                  characterCountClassName: eo.topicCharacterCount,
                                  maxCharacterCount: _ ? ei.Z7 : ei.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: ea.intl.string(ea.t['71fbmp']),
                                  channel: eS,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: _ ? N.Ie.FORUM_CHANNEL_GUIDELINES : N.Ie.CHANNEL_TOPIC,
                                  onFocus: () => {
                                      this.setState({ topicFocused: !0 });
                                  },
                                  onBlur: () => {
                                      this.setState({ topicFocused: !1 });
                                  },
                                  focused: this.state.topicFocused,
                                  onSubmit: this.handleSubmit,
                                  disableThemedBackground: !0,
                                  error: this.getError('topic'),
                                  disabled: !b
                              })
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            H =
                _ && M
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(m.xJW, {
                                  title: ea.intl.string(ea.t.qk2jdX),
                                  className: ec.marginTop20,
                                  children: (0, i.jsx)(m.Kx8, {
                                      placeholder: ea.intl.string(ea.t.DDjD1N),
                                      value: I.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: er.Vb,
                                      disabled: !b,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                          ]
                      })
                    : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(m.xJW, {
                              children: [
                                  (0, i.jsx)(m.vwX, {
                                      error: this.getError('available_tags'),
                                      id: eg,
                                      className: eo.formTitle,
                                      children: ea.intl.string(ea.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(m.R94, {
                                      id: em,
                                      type: m.R94.Types.DESCRIPTION,
                                      className: eo.description,
                                      children: ea.intl.string(ea.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(P.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(m.XZJ, {
                              disabled: !b || D,
                              value: e.hasFlag(ei.zZ.REQUIRE_TAG),
                              type: m.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  children: ea.intl.string(ea.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: eo.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(m.xJW, {
                                      className: s()(eo.settingsLeft, eo.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(m.vwX, {
                                              id: ep,
                                              className: eo.formTitle,
                                              children: ea.intl.string(ea.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(m.R94, {
                                              id: em,
                                              type: m.R94.Types.DESCRIPTION,
                                              className: eo.description,
                                              children: ea.intl.string(ea.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: eo.buttonRow,
                                              children: [
                                                  (0, i.jsx)(m.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: m.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              g.zx,
                                                              eh(eu({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !b,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: ea.intl.string(ea.t['59QgaG'])
                                                              })
                                                          )
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(g.zx, {
                                                            className: eo.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: g.zx.Sizes.MIN,
                                                            look: g.zx.Looks.LINK,
                                                            color: g.zx.Colors.RED,
                                                            children: ea.intl.string(ea.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(A.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            F = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: eo.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(m.xJW, {
                                      className: s()(eo.settingsLeft, eo.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(m.hjN, {
                                              title: ea.intl.string(ea.t.kQvoCw),
                                              children: (0, i.jsx)(m.q4e, {
                                                  options: [
                                                      {
                                                          label: ea.intl.string(ea.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: ea.intl.string(ea.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(m.R94, {
                                              className: ec.marginTop8,
                                              type: m.R94.Types.DESCRIPTION,
                                              children: ea.intl.string(ea.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(ee.Z, { className: eo.defaultImageView }) : (0, i.jsx)(et.Z, { className: eo.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              children: (0, i.jsx)(m.hjN, {
                                  title: ea.intl.string(ea.t.gePre3),
                                  children: (0, i.jsx)(m.q4e, {
                                      options: [
                                          {
                                              label: ea.intl.string(ea.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: ea.intl.string(ea.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ec.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: ea.intl.string(ea.t['165cVV'])
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            Y = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              children: (0, i.jsx)(m.hjN, {
                                  title: ea.intl.string(ea.t.Paxaur),
                                  children: (0, i.jsx)(m.q4e, {
                                      options: [
                                          {
                                              label: ea.intl.string(ea.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: ea.intl.string(ea.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ec.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: ea.intl.string(ea.t.DqOl8P)
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            J = R ? C : b,
            q = V.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(m.xJW, {
                              children: [
                                  (0, i.jsx)(m.vwX, {
                                      id: ef,
                                      className: ec.marginBottom8,
                                      children: ea.intl.string(ea.t['tTHx9/'])
                                  }),
                                  _
                                      ? (0, i.jsx)(m.vwX, {
                                            className: ec.marginTop20,
                                            children: ea.intl.string(ea.t.O1c02t)
                                        })
                                      : null,
                                  !0 === Z
                                      ? (0, i.jsx)(K.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(m.iRW, {
                                            className: ec.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: en.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !J,
                                            equidistant: !0,
                                            'aria-labelledby': ef,
                                            'aria-describedby': ex
                                        }),
                                  (0, i.jsx)(m.R94, {
                                      id: ex,
                                      type: m.R94.Types.DESCRIPTION,
                                      children: _ ? ea.intl.string(ea.t['a+1pdH']) : R ? ea.intl.string(ea.t.OMmNCg) : ea.intl.string(ea.t['HEA/DQ'])
                                  }),
                                  _
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(m.vwX, {
                                                    className: ec.marginTop20,
                                                    children: ea.intl.string(ea.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(m.iRW, {
                                                    className: ec.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: en.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !J,
                                                    equidistant: !0,
                                                    'aria-labelledby': ef,
                                                    'aria-describedby': ex
                                                }),
                                                (0, i.jsx)(m.R94, {
                                                    type: m.R94.Types.DESCRIPTION,
                                                    children: ea.intl.string(ea.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) })
                      ]
                  })
                : null,
            Q =
                R && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(m.xJW, {
                                  children: (0, i.jsx)(x.Z, {
                                      page: en.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(k.Z, {
                                          isDisabled: !S,
                                          autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : es.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(m.R94, {
                                  className: ec.marginTop8,
                                  type: m.R94.Types.DESCRIPTION,
                                  children: T ? ea.intl.string(ea.t['3aJN9P']) : ea.intl.string(ea.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            el =
                e.type === en.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(m.j7V, {
                              note: ea.intl.string(ea.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !S,
                              children: ea.intl.string(ea.t.s2rpNT)
                          })
                      })
                    : null,
            ed = null != E && (0, U.Y2)(E),
            ej = V.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(m.j7V, {
                          note: ea.intl.string(ea.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: (0, y.aC)(e),
                          hideBorder: !0,
                          disabled: !b || null != e.linkedLobby || ed,
                          disabledText: null != e.linkedLobby ? ea.intl.string(ea.t.l6uSVV) : null,
                          children: ea.intl.string(ea.t.Es25YW)
                      })
                  })
                : null,
            eb =
                V.Y0.has(e.type) && null != E && E.features.has(en.oNc.NEWS) && e.id !== (null == E ? void 0 : E.rulesChannelId) && e.id !== (null == E ? void 0 : E.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(m.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: ea.intl.format(ea.t.tI7KNT, { documentationLink: $.Z.getArticleURL(en.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: ec.marginTop8,
                                          children: ea.intl.string(ea.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === en.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !b,
                              children: ea.intl.string(ea.t.Au2b7u)
                          })
                      })
                    : null,
            ev = V.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) }),
                          (0, i.jsx)(x.Z, {
                              page: en.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(k.Z, {
                                  isDisabled: !b,
                                  autoArchiveDuration: (0, L.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ec.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? ea.intl.string(ea.t.fyXclZ) : ea.intl.string(ea.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ey = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(m.j7V, {
                      note: ea.intl.format(ea.t.feJW19, { helpdeskArticle: $.Z.getArticleURL(en.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(ei.zZ.SUMMARIES_DISABLED) && (null == E ? void 0 : E.features.has(en.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !b || !(null == E ? void 0 : E.features.has(en.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: eo.badgedItem,
                          children: [
                              ea.intl.string(ea.t.id3ozs),
                              (0, i.jsx)(m.IGR, {
                                  text: ea.intl.string(ea.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            eC = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) }),
                          (0, i.jsx)(m.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(ei.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: ea.intl.string(ea.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !b,
                              children: ea.intl.string(ea.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === en.d4z.GUILD_CATEGORY ? ((j = ea.intl.string(ea.t.OCAkGB)), (f = 'category-name')) : e.isForumPost() ? ((j = ea.intl.string(ea.t.uyVrTE)), (f = 'post-title')) : R ? ((j = ea.intl.string(ea.t.j3XWjI)), (f = 'thread-name')) : ((j = ea.intl.string(ea.t.PVbHDg)), (f = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(m.xJW, {
                        title: j,
                        children: (0, i.jsxs)('div', {
                            className: eo.nameInput,
                            children: [
                                (0, i.jsx)(g.Is, {
                                    inputRef: this.nameInputRef,
                                    value: t,
                                    onChange: this.handleChangeName,
                                    onBlur: this.handleBlurName,
                                    error: this.getError('name'),
                                    name: f,
                                    autoFocus: !0,
                                    disabled: w ? !v : !b,
                                    maxLength: en.HN8,
                                    className: eo.nameInputWrapper,
                                    inputClassName: eo.nameInputInner,
                                    focusProps: { offset: { right: -30 } }
                                }),
                                (0, i.jsx)(eZ, {
                                    onEmojiPicked: this.insertEmojiAtPosition,
                                    channel: e,
                                    guildId: null == e ? void 0 : e.guild_id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) }),
                    B,
                    H,
                    W,
                    G,
                    q,
                    Q,
                    F,
                    z,
                    Y,
                    el,
                    ej,
                    eb,
                    ey,
                    ev,
                    eC
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
        let l = (0, Y.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ec.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: ej,
                    children: ea.intl.string(ea.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(m.R94, {
                        id: eb,
                        type: m.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ec.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [en.Fc, en.epw, l],
                    minValue: en.Fc,
                    maxValue: l,
                    keyboardStep: en.V7H,
                    disabled: !n,
                    'aria-labelledby': ej,
                    'aria-describedby': null != r && '' !== r ? eb : ev
                }),
                l > en.epw
                    ? (0, i.jsx)(m.R94, {
                          id: ev,
                          type: m.geA.DESCRIPTION,
                          children: ea.intl.format(ea.t.SbQJk5, { bitrate: en.epw / 1000 })
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
            V.vg.has(e.type) &&
            (e.isGuildVocal() ||
                D.tM.getCurrentConfig({
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
                value: en.Ucd.AUTO,
                name: ea.intl.string(ea.t.jjKYpq)
            },
            {
                value: en.Ucd.FULL,
                name: ea.intl.string(ea.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ec.marginBottom40,
            children: [
                (0, i.jsx)(m.xJW, {
                    title: ea.intl.string(ea.t.jhJEJi),
                    children: (0, i.jsx)(m.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : en.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: ea.intl.format(ea.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? ea.intl.string(ea.t.XX5ciY) : ea.intl.formatToPlainString(ea.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? en.xGv : en.$pe;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: ec.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: ey,
                    children: ea.intl.string(ea.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(m.R94, {
                        id: eC,
                        type: m.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ec.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': ey,
                    'aria-describedby': null != n && '' !== n ? eC : eN
                }),
                (0, i.jsx)(m.R94, {
                    id: eN,
                    type: m.geA.DESCRIPTION,
                    children: ea.intl.format(e.isGuildStageVoice() ? ea.t.OqZI8P : ea.t['8yb3JS'], {})
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
                label: ea.intl.string(ea.t.JEmsam),
                value: eT
            });
        let a = null != (t = e.rtcRegion) ? t : eT;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(m.vwX, { children: ea.intl.string(ea.t.Ms8bX1) }),
                (0, i.jsx)(m.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: ea.intl.string(ea.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === en.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(E.Z, {
                justify: E.Z.Justify.CENTER,
                className: ec.marginTop60,
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
            : (0, i.jsxs)(m.hjN, {
                  className: 'channel-settings-overview',
                  tag: m.RB0.H1,
                  title: ea.intl.string(ea.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(m.$i$, { className: s()(ec.marginTop40, ec.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
        (super(e),
            ed(this, 'defaultReactionButtonRef', l.createRef()),
            ed(this, 'nameInputRef', l.createRef()),
            ed(this, 'cursorPosition', 0),
            ed(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (this.handleChangeDefaultReactionEmoji(n), i && t());
                    },
                    pickerIntention: el.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eO
                });
            }),
            ed(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, q.mB)(t.flags, ei.zZ.REQUIRE_TAG, e);
                (0, p.pW)({ flags: n });
            }),
            ed(this, 'handleChangeName', (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, M.Z)(e, !1)) : en.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Y.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                ((0, p.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0));
            }),
            ed(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, M.Z)(t, !0);
                    e !== t && (0, p.pW)({ name: e });
                }
            }),
            ed(this, 'insertEmojiAtPosition', (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                ((0, p.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        (null == i || i.focus(), null == i || i.setSelectionRange(t, t));
                    }, 0));
            }),
            ed(this, 'handleChangeTopic', (e) => {
                (0, p.pW)({ topic: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ed(this, 'handleChangeRichTopic', (e, t, n) => {
                (this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t));
            }),
            ed(this, 'handleChangeTemplate', (e) => {
                (0, p.pW)({ template: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ed(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
                (0, p.pW)({ defaultReactionEmoji: t });
            }),
            ed(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                ((0, p.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
            }),
            ed(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultSortOrder: e });
            }),
            ed(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultTagSetting: e });
            }),
            ed(this, 'handleChangeBitrate', (e) => {
                (0, p.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ed(this, 'handleUserLimitChange', (e) => {
                (0, p.pW)({ userLimit: Math.round(e) });
            }),
            ed(this, 'handleNSFWChange', (e) => {
                (0, p.pW)({ nsfw: e });
            }),
            ed(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, q.mB)(t.flags, ei.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, p.pW)({ flags: n });
            }),
            ed(this, 'handleNewsChange', (e) => {
                (0, p.pW)({ type: e ? en.d4z.GUILD_ANNOUNCEMENT : en.d4z.GUILD_TEXT });
            }),
            ed(this, 'handleChangeSlowmode', (e) => {
                (0, p.pW)({ rateLimitPerUser: e });
            }),
            ed(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, p.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ed(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, p.pW)({ defaultAutoArchiveDuration: e });
            }),
            ed(this, 'handleRegionChange', (e) => {
                (0, p.pW)({ rtcRegion: e === eT ? null : e });
            }),
            ed(this, 'handleVideoQualityModeChange', (e) => {
                (0, p.pW)({ videoQualityMode: e });
            }),
            ed(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, p.pW)({ autoArchiveDuration: e });
            }),
            ed(this, 'handleInvitableChanged', (e) => {
                (0, p.pW)({ invitable: e });
            }),
            ed(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, q.mB)(t.flags, ei.zZ.SUMMARIES_DISABLED, !e);
                (0, p.pW)({ flags: n });
            }),
            ed(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, q.mB)(t.flags, ei.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, p.pW)({ flags: n });
            }));
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, S.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1
        };
    }
}
function eI() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([W.Z], () => W.Z.getProps()),
        s = (0, d.e7)([z.Z], () => {
            var e;
            return z.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([B.Z], () => B.Z.theme),
        o = (0, d.e7)([G.Z], () => G.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, D.C7)(t),
        u = (0, D.Xb)(t),
        { canManageChannels: h, canSendMessages: g } = (0, d.cj)([F.Z], () => ({
            canManageChannels: F.Z.can(en.Plq.MANAGE_CHANNELS, t),
            canSendMessages: F.Z.can(en.Plq.SEND_MESSAGES, t)
        })),
        m = (0, C.ZP)(t),
        p = H.default.getId(),
        f = (0, _.v)(),
        x = null == t ? void 0 : t.id,
        j = (0, v.ts)(t, !1, !0),
        y = b.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        N = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(eR, {
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
        handleSetDefaultLayout: N,
        showChannelSummariesSettings: j,
        showAdvancedSlowModeSetting: y
    });
}
