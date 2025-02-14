n.d(t, {
    G: () => ev,
    Z: () => eC
}),
    n(789020),
    n(733860);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(313361),
    o = n(683860),
    d = n(442837),
    c = n(692547),
    u = n(780384),
    h = n(481060),
    m = n(787014),
    g = n(771340),
    p = n(410575),
    x = n(852860),
    f = n(129865),
    v = n(902840),
    j = n(933557),
    C = n(541716),
    N = n(752305),
    Z = n(893718),
    b = n(600164),
    T = n(313201),
    S = n(907040),
    E = n(633302),
    R = n(109434),
    y = n(162389),
    _ = n(946458),
    w = n(968437),
    I = n(665906),
    L = n(456077),
    A = n(747212),
    M = n(210887),
    D = n(131704),
    P = n(314897),
    k = n(388610),
    B = n(430824),
    O = n(496675),
    V = n(903223),
    G = n(594174),
    U = n(934415),
    W = n(70956),
    H = n(630388),
    z = n(63063),
    F = n(129724),
    X = n(732335),
    J = n(296146),
    q = n(564735),
    Q = n(981631),
    $ = n(176505),
    Y = n(185923),
    K = n(710352),
    ee = n(124368),
    et = n(388032),
    en = n(410132),
    ei = n(483938);
function el(e, t, n) {
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
let es = (0, T.hQ)(),
    ea = (0, T.hQ)(),
    er = (0, T.hQ)(),
    eo = (0, T.hQ)(),
    ed = (0, T.hQ)(),
    ec = (0, T.hQ)(),
    eu = (0, T.hQ)(),
    eh = (0, T.hQ)(),
    em = (0, T.hQ)(),
    eg = (0, T.hQ)(),
    ep = (0, T.hQ)(),
    ex = (0, D.kt)({
        id: '1',
        type: Q.d4z.DM
    }),
    ef = 'AUTOMATIC_RTC_REGION',
    ev = d.ZP.connectStores([k.Z], () => {
        let { channel: e, submitting: t } = k.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, m.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: s, nsfw: a, flags: r, rateLimitPerUser: o, defaultThreadRateLimitPerUser: d, threadMetadata: c, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: p, defaultReactionEmoji: x, availableTags: f, defaultSortOrder: v, defaultForumLayout: j } = e;
                e.isThread() && (t = (0, L.Z)(t, !0)),
                    (0, m.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: s,
                        nsfw: a,
                        flags: r,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: d,
                        autoArchiveDuration: null == c ? void 0 : c.autoArchiveDuration,
                        locked: null == c ? void 0 : c.locked,
                        invitable: null == c ? void 0 : c.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: p,
                        defaultReactionEmoji: x,
                        availableTags: f,
                        defaultSortOrder: v,
                        defaultForumLayout: j
                    });
            }
        };
    })(x.Z);
class ej extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && g.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let s = null !== (i = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== i ? i : '';
        (null !== (l = null === (n = e.channel) || void 0 === n ? void 0 : n.topic) && void 0 !== l ? l : '') !== s &&
            s !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: s,
                richTopicValue: (0, N.JM)(s)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, F.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, F.A)(e * W.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, s, d, u, m;
        let g, x;
        let { canManageChannels: f, canSendMessages: v, isThreadModerator: j, canManageThread: N, guild: b, isForumPost: T, isOwner: S, showAdvancedSlowModeSetting: R } = this.props,
            I = D.Ec.has(e.type),
            L = e.isForumLikeChannel(),
            M = L && (null === (n = e.availableTags) || void 0 === n ? void 0 : n.every((e) => e.moderated)),
            P = (null === (l = G.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) === !0,
            k = D.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              title: L ? et.intl.string(et.t.yR6Hwc) : et.intl.string(et.t.X8jMDg),
                              className: ei.marginTop20,
                              children: L
                                  ? (0, i.jsx)(Z.Z, {
                                        innerClassName: en.forumGuidelines,
                                        characterCountClassName: en.forumGuidelinesCharacterCount,
                                        maxCharacterCount: $.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: et.intl.string(et.t['71fbmp']),
                                        channel: ex,
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
                                  : (0, i.jsx)(h.Kx8, {
                                        autoFocus: this.props.subsection === Q.ZfP.TOPIC,
                                        placeholder: et.intl.string(et.t['71fbmp']),
                                        value: E.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: $.$x,
                                        disabled: !f,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            B =
                L && P
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  title: et.intl.string(et.t.qk2jdX),
                                  className: ei.marginTop20,
                                  children: (0, i.jsx)(h.Kx8, {
                                      placeholder: et.intl.string(et.t.DDjD1N),
                                      value: E.ZP.translateSurrogatesToInlineEmoji(null !== (s = e.template) && void 0 !== s ? s : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: K.Vb,
                                      disabled: !f,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                          ]
                      })
                    : null,
            O = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      id: es,
                                      className: en.formTitle,
                                      children: et.intl.string(et.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(h.R94, {
                                      id: ea,
                                      type: h.R94.Types.DESCRIPTION,
                                      className: en.description,
                                      children: et.intl.string(et.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(y.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(h.XZJ, {
                              disabled: !f || M,
                              value: e.hasFlag($.zZ.REQUIRE_TAG),
                              type: h.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  children: et.intl.string(et.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: en.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: a()(en.settingsLeft, en.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(h.vwX, {
                                              id: er,
                                              className: en.formTitle,
                                              children: et.intl.string(et.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              id: ea,
                                              type: h.R94.Types.DESCRIPTION,
                                              className: en.description,
                                              children: et.intl.string(et.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: en.buttonRow,
                                              children: [
                                                  (0, i.jsx)(h.yRy, {
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: h.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(h.zxk, {
                                                              ...e,
                                                              disabled: !f,
                                                              onClick: (t) => {
                                                                  var n;
                                                                  null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                                              },
                                                              children: et.intl.string(et.t['59QgaG'])
                                                          })
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(h.zxk, {
                                                            className: en.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: h.zxk.Sizes.MIN,
                                                            look: h.zxk.Looks.LINK,
                                                            color: h.zxk.Colors.RED,
                                                            children: et.intl.string(et.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(_.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            U = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: en.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: a()(en.settingsLeft, en.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(h.hjN, {
                                              title: et.intl.string(et.t.kQvoCw),
                                              children: (0, i.jsx)(h.q4e, {
                                                  options: [
                                                      {
                                                          label: et.intl.string(et.t['4HXEZG']),
                                                          value: r.X.LIST
                                                      },
                                                      {
                                                          label: et.intl.string(et.t['8RswJC']),
                                                          value: r.X.GRID
                                                      }
                                                  ],
                                                  value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              className: ei.marginTop8,
                                              type: h.R94.Types.DESCRIPTION,
                                              children: et.intl.string(et.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === r.X.GRID ? (0, i.jsx)(J.Z, { className: en.defaultImageView }) : (0, i.jsx)(q.Z, { className: en.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              children: (0, i.jsx)(h.hjN, {
                                  title: et.intl.string(et.t.gePre3),
                                  children: (0, i.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: et.intl.string(et.t.ElZtzs),
                                              value: o.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: et.intl.string(et.t.w28f3N),
                                              value: o.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: ei.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: et.intl.string(et.t['165cVV'])
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            H = I ? j : f,
            F = D.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      id: eo,
                                      className: ei.marginBottom8,
                                      children: et.intl.string(et.t['tTHx9/'])
                                  }),
                                  L
                                      ? (0, i.jsx)(h.vwX, {
                                            className: ei.marginTop20,
                                            children: et.intl.string(et.t.O1c02t)
                                        })
                                      : null,
                                  !0 === R
                                      ? (0, i.jsx)(X.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(h.iRW, {
                                            className: ei.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: Q.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !H,
                                            equidistant: !0,
                                            'aria-labelledby': eo,
                                            'aria-describedby': ed
                                        }),
                                  (0, i.jsx)(h.R94, {
                                      id: ed,
                                      type: h.R94.Types.DESCRIPTION,
                                      children: L ? et.intl.string(et.t['a+1pdH']) : I ? et.intl.string(et.t.OMmNCg) : et.intl.string(et.t['HEA/DQ'])
                                  }),
                                  L
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(h.vwX, {
                                                    className: ei.marginTop20,
                                                    children: et.intl.string(et.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(h.iRW, {
                                                    className: ei.marginTop20,
                                                    initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
                                                    markers: Q.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !H,
                                                    equidistant: !0,
                                                    'aria-labelledby': eo,
                                                    'aria-describedby': ed
                                                }),
                                                (0, i.jsx)(h.R94, {
                                                    type: h.R94.Types.DESCRIPTION,
                                                    children: et.intl.string(et.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) })
                      ]
                  })
                : null,
            Y =
                I && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  children: (0, i.jsx)(p.Z, {
                                      page: Q.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(A.Z, {
                                          isDisabled: !N,
                                          autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : ee.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(h.R94, {
                                  className: ei.marginTop8,
                                  type: h.R94.Types.DESCRIPTION,
                                  children: T ? et.intl.string(et.t['3aJN9P']) : et.intl.string(et.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            el =
                e.type === Q.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: et.intl.string(et.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !N,
                              children: et.intl.string(et.t.s2rpNT)
                          })
                      })
                    : null,
            ec = D.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.j7V, {
                          note: et.intl.string(et.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !f || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? et.intl.string(et.t.l6uSVV) : null,
                          children: et.intl.string(et.t.Es25YW)
                      })
                  })
                : null,
            eu =
                D.Y0.has(e.type) && null != b && b.hasFeature(Q.oNc.NEWS) && e.id !== (null == b ? void 0 : b.rulesChannelId) && e.id !== (null == b ? void 0 : b.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: et.intl.format(et.t.tI7KNT, { documentationLink: z.Z.getArticleURL(Q.BhN.ANNOUNCEMENT_CHANNELS) }),
                              onChange: this.handleNewsChange,
                              value: e.type === Q.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !f,
                              children: et.intl.string(et.t.Au2b7u)
                          })
                      })
                    : null,
            eh = D.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) }),
                          (0, i.jsx)(p.Z, {
                              page: Q.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(A.Z, {
                                  isDisabled: !f,
                                  autoArchiveDuration: (0, w.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: ei.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? et.intl.string(et.t.fyXclZ) : et.intl.string(et.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            em = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(h.j7V, {
                      note: et.intl.format(et.t.feJW19, { helpdeskArticle: z.Z.getArticleURL(Q.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag($.zZ.SUMMARIES_DISABLED) && (null == b ? void 0 : b.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !f || !(null == b ? void 0 : b.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: en.badgedItem,
                          children: [
                              et.intl.string(et.t.id3ozs),
                              (0, i.jsx)(h.IGR, {
                                  text: et.intl.string(et.t.oW0eUV),
                                  color: c.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            eg = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) }),
                          (0, i.jsx)(h.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag($.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: et.intl.string(et.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !f,
                              children: et.intl.string(et.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === Q.d4z.GUILD_CATEGORY ? ((x = et.intl.string(et.t.OCAkGB)), (g = 'category-name')) : e.isForumPost() ? ((x = et.intl.string(et.t.uyVrTE)), (g = 'post-title')) : I ? ((x = et.intl.string(et.t.j3XWjI)), (g = 'thread-name')) : ((x = et.intl.string(et.t.PVbHDg)), (g = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(h.xJW, {
                        title: x,
                        children: (0, i.jsx)(h.oil, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: g,
                            autoFocus: !0,
                            disabled: S ? !v : !f,
                            maxLength: Q.HN8
                        })
                    }),
                    (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) }),
                    k,
                    B,
                    O,
                    V,
                    F,
                    Y,
                    U,
                    W,
                    el,
                    ec,
                    eu,
                    em,
                    eh,
                    eg
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
        let l = (0, U.g7)(t, e),
            s = this.getError('bitrate');
        return (0, i.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            className: ei.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: ec,
                    children: et.intl.string(et.t.w2d0vb)
                }),
                '' !== s &&
                    (0, i.jsx)(h.R94, {
                        id: eu,
                        type: h.geA.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: ei.marginBottom8,
                        children: s
                    }),
                (0, i.jsx)(h.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [Q.Fc, Q.epw, l],
                    minValue: Q.Fc,
                    maxValue: l,
                    keyboardStep: Q.V7H,
                    disabled: !n,
                    'aria-labelledby': ec,
                    'aria-describedby': null != s && '' !== s ? eu : eh
                }),
                l > Q.epw
                    ? (0, i.jsx)(h.R94, {
                          id: eh,
                          type: h.geA.DESCRIPTION,
                          children: et.intl.format(et.t.SbQJk5, { bitrate: Q.epw / 1000 })
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
            D.vg.has(e.type) &&
            (e.isGuildVocal() ||
                I.tM.getCurrentConfig({
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
                value: Q.Ucd.AUTO,
                name: et.intl.string(et.t.jjKYpq)
            },
            {
                value: Q.Ucd.FULL,
                name: et.intl.string(et.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            className: ei.marginBottom40,
            children: [
                (0, i.jsx)(h.xJW, {
                    title: et.intl.string(et.t.jhJEJi),
                    children: (0, i.jsx)(h.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Q.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: et.intl.format(et.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? et.intl.string(et.t.XX5ciY) : et.intl.formatToPlainString(et.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? Q.xGv : Q.$pe;
        return (0, i.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            className: ei.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: em,
                    children: et.intl.string(et.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(h.R94, {
                        id: eg,
                        type: h.geA.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: ei.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(h.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': em,
                    'aria-describedby': null != n && '' !== n ? eg : ep
                }),
                (0, i.jsx)(h.R94, {
                    id: ep,
                    type: h.geA.DESCRIPTION,
                    children: et.intl.format(e.isGuildStageVoice() ? et.t.OqZI8P : et.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: s } = this.props;
        if (null == s || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let a = [];
        null != n &&
            (a = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: et.intl.string(et.t.JEmsam),
                value: ef
            });
        let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : ef;
        return (0, i.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.vwX, { children: et.intl.string(et.t.Ms8bX1) }),
                (0, i.jsx)(h.q4e, {
                    options: a,
                    value: r,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: et.intl.string(et.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t;
        let { theme: l } = this.props;
        return (
            (t = e.type === Q.d4z.GUILD_CATEGORY ? ((0, u.wj)(l) ? n(309095) : n(925442)) : (0, u.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(b.Z, {
                justify: b.Z.Justify.CENTER,
                className: ei.marginTop60,
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
            : (0, i.jsxs)(h.hjN, {
                  className: 'channel-settings-overview',
                  tag: h.RB0.H1,
                  title: et.intl.string(et.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(h.$i$, { className: a()(ei.marginTop40, ei.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
            el(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(S.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: Y.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            el(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            el(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, L.Z)(e, !1)) : Q.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, U.Nj)(e)), (0, m.pW)({ name: e }));
            }),
            el(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, L.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            el(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: E.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            el(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            el(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: E.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            el(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
            el(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            el(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            el(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            el(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            el(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            el(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            el(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? Q.d4z.GUILD_ANNOUNCEMENT : Q.d4z.GUILD_TEXT });
            }),
            el(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            el(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            el(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            el(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === ef ? null : e });
            }),
            el(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            el(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            el(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            el(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            el(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, m.pW)({ flags: n });
            });
        let l = null !== (n = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== n ? n : '';
        this.state = {
            textTopicValue: l,
            richTopicValue: (0, N.JM)(l),
            topicFocused: !1
        };
    }
}
function eC() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, d.cj)([k.Z], () => k.Z.getProps()),
        a = (0, d.e7)([V.Z], () => {
            var e;
            return V.Z.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null);
        }),
        r = (0, d.e7)([M.Z], () => M.Z.theme),
        o = (0, d.e7)([B.Z], () => B.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, I.C7)(t),
        u = (0, I.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([O.Z], () => ({
            canManageChannels: O.Z.can(Q.Plq.MANAGE_CHANNELS, t),
            canSendMessages: O.Z.can(Q.Plq.SEND_MESSAGES, t)
        })),
        g = (0, j.ZP)(t),
        p = P.default.getId(),
        x = (0, R.v)(),
        C = null == t ? void 0 : t.id,
        N = (0, v.ts)(t, !1, !0),
        Z = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        b = l.useCallback(
            (e) => {
                null != C && x.getState().setLayoutType(C, e);
            },
            [C, x]
        );
    return (0, i.jsx)(ej, {
        errors: e,
        channel: t,
        channelName: g,
        submitting: n,
        regions: a,
        theme: r,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: m,
        isThreadModerator: u,
        canManageThread: c,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: b,
        showChannelSummariesSettings: N,
        showAdvancedSlowModeSetting: Z
    });
}
