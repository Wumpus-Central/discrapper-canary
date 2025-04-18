n.d(t, {
    G: () => eN,
    Z: () => ey
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
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
    N = n(933557),
    v = n(541716),
    y = n(752305),
    C = n(893718),
    S = n(600164),
    w = n(313201),
    O = n(907040),
    Z = n(633302),
    T = n(109434),
    E = n(162389),
    R = n(946458),
    _ = n(600553),
    I = n(968437),
    P = n(665906),
    W = n(456077),
    D = n(747212),
    L = n(210887),
    A = n(131704),
    M = n(314897),
    k = n(388610),
    B = n(430824),
    V = n(496675),
    G = n(903223),
    U = n(594174),
    H = n(934415),
    z = n(70956),
    F = n(630388),
    X = n(63063),
    J = n(129724),
    q = n(732335),
    $ = n(296146),
    Q = n(564735),
    Y = n(981631),
    K = n(176505),
    ee = n(185923),
    et = n(710352),
    en = n(124368),
    ei = n(388032),
    er = n(262817),
    el = n(971005);
function es(e, t, n) {
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
let ea = (0, w.hQ)(),
    eo = (0, w.hQ)(),
    ec = (0, w.hQ)(),
    ed = (0, w.hQ)(),
    eu = (0, w.hQ)(),
    eh = (0, w.hQ)(),
    eg = (0, w.hQ)(),
    em = (0, w.hQ)(),
    ep = (0, w.hQ)(),
    ef = (0, w.hQ)(),
    ex = (0, w.hQ)(),
    ej = (0, A.kt)({
        id: '1',
        type: Y.d4z.DM
    }),
    eb = 'AUTOMATIC_RTC_REGION',
    eN = d.ZP.connectStores([k.Z], () => {
        let { channel: e, submitting: t } = k.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, m.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: r, userLimit: l, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: N } = e;
                e.isThread() && (t = (0, W.Z)(t, !0)),
                    (0, m.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: r,
                        userLimit: l,
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
                        defaultTagSetting: N
                    });
            }
        };
    })(x.Z);
class ev extends r.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && p.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, r;
        let l = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (r = null == (n = e.channel) ? void 0 : n.topic) ? r : '') !== l &&
            l !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: l,
                richTopicValue: (0, y.JM)(l)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, J.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, J.A)(e * z.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, r, l, d, h, m;
        let p,
            x,
            { canManageChannels: j, canSendMessages: b, isThreadModerator: N, canManageThread: y, guild: S, isForumPost: w, isOwner: O, showAdvancedSlowModeSetting: T, settingsRevampEnabled: _ } = this.props,
            P = A.Ec.has(e.type),
            W = e.isForumLikeChannel(),
            L = W && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            M = (null == (r = U.default.getCurrentUser()) ? void 0 : r.isStaff()) === !0,
            k = A.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              title: W ? ei.NW.string(ei.t.yR6Hwc) : ei.NW.string(ei.t.X8jMDg),
                              className: el.marginTop20,
                              children: W
                                  ? (0, i.jsx)(C.Z, {
                                        innerClassName: er.forumGuidelines,
                                        characterCountClassName: er.forumGuidelinesCharacterCount,
                                        maxCharacterCount: K.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: ei.NW.string(ei.t['71fbmp']),
                                        channel: ej,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: v.Ie.FORUM_CHANNEL_GUIDELINES,
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
                                        autoFocus: this.props.subsection === Y.ZfP.TOPIC,
                                        placeholder: ei.NW.string(ei.t['71fbmp']),
                                        value: Z.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: K.$x,
                                        disabled: !j,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            B =
                W && M
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: ei.NW.string(ei.t.qk2jdX),
                                  className: el.marginTop20,
                                  children: (0, i.jsx)(g.Kx8, {
                                      placeholder: ei.NW.string(ei.t.DDjD1N),
                                      value: Z.ZP.translateSurrogatesToInlineEmoji(null != (l = e.template) ? l : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: et.Vb,
                                      disabled: !j,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                          ]
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: ea,
                                      className: er.formTitle,
                                      children: ei.NW.string(ei.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(g.R94, {
                                      id: eo,
                                      type: g.R94.Types.DESCRIPTION,
                                      className: er.description,
                                      children: ei.NW.string(ei.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(E.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(g.XZJ, {
                              disabled: !j || L,
                              value: e.hasFlag(K.zZ.REQUIRE_TAG),
                              type: g.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  children: ei.NW.string(ei.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: er.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(er.settingsLeft, er.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              id: ec,
                                              className: er.formTitle,
                                              children: ei.NW.string(ei.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              id: eo,
                                              type: g.R94.Types.DESCRIPTION,
                                              className: er.description,
                                              children: ei.NW.string(ei.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: er.buttonRow,
                                              children: [
                                                  (0, i.jsx)(g.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: g.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) => {
                                                          var t, n;
                                                          return (0, i.jsx)(
                                                              g.zxk,
                                                              ((t = (function (e) {
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
                                                                              es(e, t, n[t]);
                                                                          });
                                                                  }
                                                                  return e;
                                                              })({}, e)),
                                                              (n = n =
                                                                  {
                                                                      buttonRef: this.defaultReactionButtonRef,
                                                                      disabled: !j,
                                                                      onClick: (t) => {
                                                                          var n;
                                                                          null == (n = e.onClick) || n.call(e, t);
                                                                      },
                                                                      children: ei.NW.string(ei.t['59QgaG'])
                                                                  }),
                                                              Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                  : (function (e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var i = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, i);
                                                                        }
                                                                        return n;
                                                                    })(Object(n)).forEach(function (e) {
                                                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                    }),
                                                              t)
                                                          );
                                                      }
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(g.zxk, {
                                                            className: er.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: g.zxk.Sizes.MIN,
                                                            look: g.zxk.Looks.LINK,
                                                            color: g.zxk.Colors.RED,
                                                            children: ei.NW.string(ei.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(R.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: er.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(er.settingsLeft, er.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(g.hjN, {
                                              title: ei.NW.string(ei.t.kQvoCw),
                                              children: (0, i.jsx)(g.q4e, {
                                                  options: [
                                                      {
                                                          label: ei.NW.string(ei.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: ei.NW.string(ei.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              className: el.marginTop8,
                                              type: g.R94.Types.DESCRIPTION,
                                              children: ei.NW.string(ei.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)($.Z, { className: er.defaultImageView }) : (0, i.jsx)(Q.Z, { className: er.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: ei.NW.string(ei.t.gePre3),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: ei.NW.string(ei.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: ei.NW.string(ei.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: ei.NW.string(ei.t['165cVV'])
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: ei.NW.string(ei.t.Paxaur),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: ei.NW.string(ei.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: ei.NW.string(ei.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: ei.NW.string(ei.t.DqOl8P)
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            J = P ? N : j,
            ee = A.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: ed,
                                      className: el.marginBottom8,
                                      children: ei.NW.string(ei.t['tTHx9/'])
                                  }),
                                  W
                                      ? (0, i.jsx)(g.vwX, {
                                            className: el.marginTop20,
                                            children: ei.NW.string(ei.t.O1c02t)
                                        })
                                      : null,
                                  !0 === T
                                      ? (0, i.jsx)(q.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(g.iRW, {
                                            className: el.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: Y.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !J,
                                            equidistant: !0,
                                            'aria-labelledby': ed,
                                            'aria-describedby': eu
                                        }),
                                  (0, i.jsx)(g.R94, {
                                      id: eu,
                                      type: g.R94.Types.DESCRIPTION,
                                      children: W ? ei.NW.string(ei.t['a+1pdH']) : P ? ei.NW.string(ei.t.OMmNCg) : ei.NW.string(ei.t['HEA/DQ'])
                                  }),
                                  W
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.vwX, {
                                                    className: el.marginTop20,
                                                    children: ei.NW.string(ei.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(g.iRW, {
                                                    className: el.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: Y.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !J,
                                                    equidistant: !0,
                                                    'aria-labelledby': ed,
                                                    'aria-describedby': eu
                                                }),
                                                (0, i.jsx)(g.R94, {
                                                    type: g.R94.Types.DESCRIPTION,
                                                    children: ei.NW.string(ei.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            eh =
                P && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  children: (0, i.jsx)(f.Z, {
                                      page: Y.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(D.Z, {
                                          isDisabled: !y,
                                          autoArchiveDuration: null != (m = e.threadMetadata.autoArchiveDuration) ? m : en.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.R94, {
                                  className: el.marginTop8,
                                  type: g.R94.Types.DESCRIPTION,
                                  children: w ? ei.NW.string(ei.t['3aJN9P']) : ei.NW.string(ei.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            eg =
                e.type === Y.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: ei.NW.string(ei.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !y,
                              children: ei.NW.string(ei.t.s2rpNT)
                          })
                      })
                    : null,
            em = A.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.j7V, {
                          note: ei.NW.string(ei.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !j || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? ei.NW.string(ei.t.l6uSVV) : null,
                          children: ei.NW.string(ei.t.Es25YW)
                      })
                  })
                : null,
            ep =
                A.Y0.has(e.type) && null != S && S.hasFeature(Y.oNc.NEWS) && e.id !== (null == S ? void 0 : S.rulesChannelId) && e.id !== (null == S ? void 0 : S.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: ei.NW.format(ei.t.tI7KNT, { documentationLink: X.Z.getArticleURL(Y.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: el.marginTop8,
                                          children: _ ? ei.NW.string(ei.t['2Ab4IS']) : ei.NW.string(ei.t['/8VkyM'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === Y.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !j,
                              children: ei.NW.string(ei.t.Au2b7u)
                          })
                      })
                    : null,
            ef = A.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(f.Z, {
                              page: Y.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(D.Z, {
                                  isDisabled: !j,
                                  autoArchiveDuration: (0, I.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? ei.NW.string(ei.t.fyXclZ) : ei.NW.string(ei.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ex = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(g.j7V, {
                      note: ei.NW.format(ei.t.feJW19, { helpdeskArticle: X.Z.getArticleURL(Y.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(K.zZ.SUMMARIES_DISABLED) && (null == S ? void 0 : S.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !j || !(null == S ? void 0 : S.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: er.badgedItem,
                          children: [
                              ei.NW.string(ei.t.id3ozs),
                              (0, i.jsx)(g.IGR, {
                                  text: ei.NW.string(ei.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            eb = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(g.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(K.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: ei.NW.string(ei.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !j,
                              children: ei.NW.string(ei.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === Y.d4z.GUILD_CATEGORY ? ((x = ei.NW.string(ei.t.OCAkGB)), (p = 'category-name')) : e.isForumPost() ? ((x = ei.NW.string(ei.t.uyVrTE)), (p = 'post-title')) : P ? ((x = ei.NW.string(ei.t.j3XWjI)), (p = 'thread-name')) : ((x = ei.NW.string(ei.t.PVbHDg)), (p = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.xJW, {
                        title: x,
                        children: (0, i.jsx)(g.oil, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: p,
                            autoFocus: !0,
                            disabled: O ? !b : !j,
                            maxLength: Y.HN8
                        })
                    }),
                    (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                    k,
                    B,
                    V,
                    G,
                    ee,
                    eh,
                    H,
                    z,
                    F,
                    eg,
                    em,
                    ep,
                    ex,
                    ef,
                    eb
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
        let r = (0, H.g7)(t, e),
            l = this.getError('bitrate');
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: eh,
                    children: ei.NW.string(ei.t.w2d0vb)
                }),
                '' !== l &&
                    (0, i.jsx)(g.R94, {
                        id: eg,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
                        children: l
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.bitrate, r),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [Y.Fc, Y.epw, r],
                    minValue: Y.Fc,
                    maxValue: r,
                    keyboardStep: Y.V7H,
                    disabled: !n,
                    'aria-labelledby': eh,
                    'aria-describedby': null != l && '' !== l ? eg : em
                }),
                r > Y.epw
                    ? (0, i.jsx)(g.R94, {
                          id: em,
                          type: g.geA.DESCRIPTION,
                          children: ei.NW.format(ei.t.SbQJk5, { bitrate: Y.epw / 1000 })
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
            A.vg.has(e.type) &&
            (e.isGuildVocal() ||
                P.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: '9b50bd_1'
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let r = [
            {
                value: Y.Ucd.AUTO,
                name: ei.NW.string(ei.t.jjKYpq)
            },
            {
                value: Y.Ucd.FULL,
                name: ei.NW.string(ei.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: ei.NW.string(ei.t.jhJEJi),
                    children: (0, i.jsx)(g.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: r,
                        value: null != (t = e.videoQualityMode) ? t : Y.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: ei.NW.format(ei.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? ei.NW.string(ei.t.XX5ciY) : ei.NW.formatToPlainString(ei.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            r = e.isGuildStageVoice() ? Y.xGv : Y.$pe;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: ep,
                    children: ei.NW.string(ei.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(g.R94, {
                        id: ef,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.userLimit, r),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, r],
                    minValue: 0,
                    maxValue: r,
                    disabled: !t,
                    'aria-labelledby': ep,
                    'aria-describedby': null != n && '' !== n ? ef : ex
                }),
                (0, i.jsx)(g.R94, {
                    id: ex,
                    type: g.geA.DESCRIPTION,
                    children: ei.NW.format(e.isGuildStageVoice() ? ei.t.OqZI8P : ei.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: r, guild: l } = this.props;
        if (null == l || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: ei.NW.string(ei.t.JEmsam),
                value: eb
            });
        let a = null != (t = e.rtcRegion) ? t : eb;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(g.vwX, { children: ei.NW.string(ei.t.Ms8bX1) }),
                (0, i.jsx)(g.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !r
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: ei.NW.string(ei.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: r } = this.props;
        return (
            (t = e.type === Y.d4z.GUILD_CATEGORY ? ((0, h.wj)(r) ? n(309095) : n(925442)) : (0, h.wj)(r) ? n(316491) : n(301358)),
            (0, i.jsx)(S.Z, {
                justify: S.Z.Justify.CENTER,
                className: el.marginTop60,
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
                  title: ei.NW.string(ei.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
            es(this, 'defaultReactionButtonRef', r.createRef()),
            es(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(O.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: ee.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            es(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, F.mB)(t.flags, K.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            es(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, W.Z)(e, !1)) : Y.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, H.Nj)(e)), (0, m.pW)({ name: e }));
            }),
            es(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, W.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            es(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: Z.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            es(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            es(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: Z.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            es(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
            es(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            es(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            es(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultTagSetting: e });
            }),
            es(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            es(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            es(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            es(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, F.mB)(t.flags, K.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            es(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? Y.d4z.GUILD_ANNOUNCEMENT : Y.d4z.GUILD_TEXT });
            }),
            es(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            es(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            es(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            es(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === eb ? null : e });
            }),
            es(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            es(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            es(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            es(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, F.mB)(t.flags, K.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            es(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, F.mB)(t.flags, K.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, m.pW)({ flags: n });
            });
        let l = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: l,
            richTopicValue: (0, y.JM)(l),
            topicFocused: !1
        };
    }
}
function ey() {
    var e;
    let { errors: t, channel: n, submitting: l, subsection: s } = (0, d.cj)([k.Z], () => k.Z.getProps()),
        a = (0, d.e7)([G.Z], () => {
            var e;
            return G.Z.getRegions(null != (e = null == n ? void 0 : n.getGuildId()) ? e : null);
        }),
        o = (0, d.e7)([L.Z], () => L.Z.theme),
        c = (0, d.e7)([B.Z], () => B.Z.getGuild(null == n ? void 0 : n.getGuildId())),
        u = (0, P.C7)(n),
        h = (0, P.Xb)(n),
        { canManageChannels: g, canSendMessages: m } = (0, d.cj)([V.Z], () => ({
            canManageChannels: V.Z.can(Y.Plq.MANAGE_CHANNELS, n),
            canSendMessages: V.Z.can(Y.Plq.SEND_MESSAGES, n)
        })),
        p = (0, N.ZP)(n),
        f = M.default.getId(),
        x = (0, T.v)(),
        v = null == n ? void 0 : n.id,
        y = (0, b.ts)(n, !1, !0),
        C = j.Z.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = r.useCallback(
            (e) => {
                null != v && x.getState().setLayoutType(v, e);
            },
            [v, x]
        ),
        w = (0, _.Dj)({
            guildId: null != (e = null == n ? void 0 : n.guild_id) ? e : void 0,
            location: 'guild settings overview'
        });
    return (0, i.jsx)(ev, {
        errors: t,
        channel: n,
        channelName: p,
        submitting: l,
        regions: a,
        theme: o,
        guild: c,
        canManageChannels: (null == n ? void 0 : n.isThread()) ? u : g,
        canSendMessages: m,
        isThreadModerator: h,
        canManageThread: u,
        subsection: s,
        isForumPost: null != n && n.isForumPost(),
        isOwner: null == n ? void 0 : n.isOwner(f),
        handleSetDefaultLayout: S,
        showChannelSummariesSettings: y,
        showAdvancedSlowModeSetting: C,
        settingsRevampEnabled: w
    });
}
