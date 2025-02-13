n.d(t, {
    G: () => ef,
    Z: () => eC
}),
    n(789020),
    n(47120),
    n(733860),
    n(653041);
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
    b = n(893718),
    Z = n(600164),
    S = n(313201),
    E = n(907040),
    T = n(633302),
    R = n(109434),
    y = n(162389),
    _ = n(946458),
    w = n(968437),
    I = n(665906),
    L = n(456077),
    A = n(747212),
    M = n(210887),
    k = n(131704),
    D = n(314897),
    P = n(388610),
    O = n(430824),
    B = n(496675),
    V = n(903223),
    U = n(594174),
    G = n(934415),
    z = n(70956),
    W = n(630388),
    H = n(63063),
    F = n(129724),
    X = n(296146),
    J = n(564735),
    q = n(981631),
    Q = n(176505),
    Y = n(185923),
    $ = n(710352),
    K = n(124368),
    ee = n(388032),
    et = n(410132),
    en = n(483938);
function ei(e, t, n) {
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
let el = (0, S.hQ)(),
    es = (0, S.hQ)(),
    ea = (0, S.hQ)(),
    er = (0, S.hQ)(),
    eo = (0, S.hQ)(),
    ed = (0, S.hQ)(),
    ec = (0, S.hQ)(),
    eu = (0, S.hQ)(),
    eh = (0, S.hQ)(),
    em = (0, S.hQ)(),
    eg = (0, S.hQ)(),
    ep = (0, k.kt)({
        id: '1',
        type: q.d4z.DM
    }),
    ex = 'AUTOMATIC_RTC_REGION',
    ef = d.ZP.connectStores([P.Z], () => {
        let { channel: e, submitting: t } = P.Z.getProps();
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
function ev(e) {
    let { channel: t, onChange: n } = e,
        [s, a] = l.useState(null),
        r = t.rateLimitPerUser,
        o = l.useMemo(() => {
            let e = [...(null != s ? s : q.BiE)];
            return (
                e.includes(r) || e.unshift(r),
                e.map((e) => ({
                    label: (0, F.A)(e, !1),
                    value: e
                }))
            );
        }, [s, r]),
        d = l.useCallback(
            (e) => {
                n(e), a(null);
            },
            [n]
        ),
        c = l.useCallback((e) => {
            if ('' === e) {
                a(null);
                return;
            }
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) {
                a(null);
                return;
            }
            n <= q.GI0 && t.push(n);
            let i = n * z.Z.Seconds.MINUTE;
            i <= q.GI0 && t.push(i);
            let l = n * z.Z.Seconds.HOUR;
            l <= q.GI0 && t.push(l), a(t);
        }, []),
        u = l.useCallback(() => {
            a(null);
        }, []);
    return (0, i.jsx)(h.VcW, {
        className: en.marginBottom8,
        value: r,
        onChange: d,
        onSearchChange: c,
        options: o,
        onBlur: u,
        placeholder: ee.intl.string(ee.t.dBqQu7)
    });
}
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
        return (0, F.A)(e * z.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, s, d, u, m;
        let g, x;
        let { canManageChannels: f, canSendMessages: v, isThreadModerator: j, canManageThread: N, guild: Z, isForumPost: S, isOwner: E, showAdvancedSlowModeSetting: R } = this.props,
            I = k.Ec.has(e.type),
            L = e.isForumLikeChannel(),
            M = L && (null === (n = e.availableTags) || void 0 === n ? void 0 : n.every((e) => e.moderated)),
            D = (null === (l = U.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) === !0,
            P = k.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              title: L ? ee.intl.string(ee.t.yR6Hwc) : ee.intl.string(ee.t.X8jMDg),
                              className: en.marginTop20,
                              children: L
                                  ? (0, i.jsx)(b.Z, {
                                        innerClassName: et.forumGuidelines,
                                        characterCountClassName: et.forumGuidelinesCharacterCount,
                                        maxCharacterCount: Q.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: ee.intl.string(ee.t['71fbmp']),
                                        channel: ep,
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
                                        autoFocus: this.props.subsection === q.ZfP.TOPIC,
                                        placeholder: ee.intl.string(ee.t['71fbmp']),
                                        value: T.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: Q.$x,
                                        disabled: !f,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            O =
                L && D
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  title: ee.intl.string(ee.t.qk2jdX),
                                  className: en.marginTop20,
                                  children: (0, i.jsx)(h.Kx8, {
                                      placeholder: ee.intl.string(ee.t.DDjD1N),
                                      value: T.ZP.translateSurrogatesToInlineEmoji(null !== (s = e.template) && void 0 !== s ? s : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: $.Vb,
                                      disabled: !f,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                          ]
                      })
                    : null,
            B = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      id: el,
                                      className: et.formTitle,
                                      children: ee.intl.string(ee.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(h.R94, {
                                      id: es,
                                      type: h.R94.Types.DESCRIPTION,
                                      className: et.description,
                                      children: ee.intl.string(ee.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(y.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(h.XZJ, {
                              disabled: !f || M,
                              value: e.hasFlag(Q.zZ.REQUIRE_TAG),
                              type: h.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  children: ee.intl.string(ee.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: et.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: a()(et.settingsLeft, et.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(h.vwX, {
                                              id: ea,
                                              className: et.formTitle,
                                              children: ee.intl.string(ee.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              id: es,
                                              type: h.R94.Types.DESCRIPTION,
                                              className: et.description,
                                              children: ee.intl.string(ee.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: et.buttonRow,
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
                                                              children: ee.intl.string(ee.t['59QgaG'])
                                                          })
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(h.zxk, {
                                                            className: et.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: h.zxk.Sizes.MIN,
                                                            look: h.zxk.Looks.LINK,
                                                            color: h.zxk.Colors.RED,
                                                            children: ee.intl.string(ee.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(_.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: et.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: a()(et.settingsLeft, et.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(h.hjN, {
                                              title: ee.intl.string(ee.t.kQvoCw),
                                              children: (0, i.jsx)(h.q4e, {
                                                  options: [
                                                      {
                                                          label: ee.intl.string(ee.t['4HXEZG']),
                                                          value: r.X.LIST
                                                      },
                                                      {
                                                          label: ee.intl.string(ee.t['8RswJC']),
                                                          value: r.X.GRID
                                                      }
                                                  ],
                                                  value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              className: en.marginTop8,
                                              type: h.R94.Types.DESCRIPTION,
                                              children: ee.intl.string(ee.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === r.X.GRID ? (0, i.jsx)(X.Z, { className: et.defaultImageView }) : (0, i.jsx)(J.Z, { className: et.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              children: (0, i.jsx)(h.hjN, {
                                  title: ee.intl.string(ee.t.gePre3),
                                  children: (0, i.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: ee.intl.string(ee.t.ElZtzs),
                                              value: o.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: ee.intl.string(ee.t.w28f3N),
                                              value: o.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: en.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: ee.intl.string(ee.t['165cVV'])
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            W = I ? j : f,
            F = k.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      id: er,
                                      className: en.marginBottom8,
                                      children: ee.intl.string(ee.t['tTHx9/'])
                                  }),
                                  L
                                      ? (0, i.jsx)(h.vwX, {
                                            className: en.marginTop20,
                                            children: ee.intl.string(ee.t.O1c02t)
                                        })
                                      : null,
                                  !0 === R
                                      ? (0, i.jsx)(ev, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(h.iRW, {
                                            className: en.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: q.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !W,
                                            equidistant: !0,
                                            'aria-labelledby': er,
                                            'aria-describedby': eo
                                        }),
                                  (0, i.jsx)(h.R94, {
                                      id: eo,
                                      type: h.R94.Types.DESCRIPTION,
                                      children: L ? ee.intl.string(ee.t['a+1pdH']) : I ? ee.intl.string(ee.t.OMmNCg) : ee.intl.string(ee.t['HEA/DQ'])
                                  }),
                                  L
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(h.vwX, {
                                                    className: en.marginTop20,
                                                    children: ee.intl.string(ee.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(h.iRW, {
                                                    className: en.marginTop20,
                                                    initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
                                                    markers: q.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !W,
                                                    equidistant: !0,
                                                    'aria-labelledby': er,
                                                    'aria-describedby': eo
                                                }),
                                                (0, i.jsx)(h.R94, {
                                                    type: h.R94.Types.DESCRIPTION,
                                                    children: ee.intl.string(ee.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            Y =
                I && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  children: (0, i.jsx)(p.Z, {
                                      page: q.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(A.Z, {
                                          autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : K.AX,
                                          guild: Z,
                                          channel: e,
                                          onChange: this.handleAutoArchiveDurationChanged,
                                          isDisabled: !N
                                      })
                                  })
                              }),
                              (0, i.jsx)(h.R94, {
                                  className: en.marginTop8,
                                  type: h.R94.Types.DESCRIPTION,
                                  children: S ? ee.intl.string(ee.t['3aJN9P']) : ee.intl.string(ee.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            ei =
                e.type === q.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: ee.intl.string(ee.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !N,
                              children: ee.intl.string(ee.t.s2rpNT)
                          })
                      })
                    : null,
            ed = k.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.j7V, {
                          note: ee.intl.string(ee.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !f || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? ee.intl.string(ee.t.l6uSVV) : null,
                          children: ee.intl.string(ee.t.Es25YW)
                      })
                  })
                : null,
            ec =
                k.Y0.has(e.type) && null != Z && Z.hasFeature(q.oNc.NEWS) && e.id !== (null == Z ? void 0 : Z.rulesChannelId) && e.id !== (null == Z ? void 0 : Z.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: ee.intl.format(ee.t.tI7KNT, { documentationLink: H.Z.getArticleURL(q.BhN.ANNOUNCEMENT_CHANNELS) }),
                              onChange: this.handleNewsChange,
                              value: e.type === q.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !f,
                              children: ee.intl.string(ee.t.Au2b7u)
                          })
                      })
                    : null,
            eu = k.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) }),
                          (0, i.jsx)(p.Z, {
                              page: q.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(A.Z, {
                                  autoArchiveDuration: (0, w.WD)(e, null),
                                  guild: Z,
                                  channel: e,
                                  onChange: this.handleChangeDefaultAutoArchiveDuration,
                                  isDisabled: !f
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: en.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? ee.intl.string(ee.t.fyXclZ) : ee.intl.string(ee.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            eh = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(h.j7V, {
                      note: ee.intl.format(ee.t.feJW19, { helpdeskArticle: H.Z.getArticleURL(q.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(Q.zZ.SUMMARIES_DISABLED) && (null == Z ? void 0 : Z.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !f || !(null == Z ? void 0 : Z.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: et.badgedItem,
                          children: [
                              ee.intl.string(ee.t.id3ozs),
                              (0, i.jsx)(h.IGR, {
                                  text: ee.intl.string(ee.t.oW0eUV),
                                  color: c.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            em = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) }),
                          (0, i.jsx)(h.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(Q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: ee.intl.string(ee.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !f,
                              children: ee.intl.string(ee.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === q.d4z.GUILD_CATEGORY ? ((x = ee.intl.string(ee.t.OCAkGB)), (g = 'category-name')) : e.isForumPost() ? ((x = ee.intl.string(ee.t.uyVrTE)), (g = 'post-title')) : I ? ((x = ee.intl.string(ee.t.j3XWjI)), (g = 'thread-name')) : ((x = ee.intl.string(ee.t.PVbHDg)), (g = 'channel-name')),
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
                            disabled: E ? !v : !f,
                            maxLength: q.HN8
                        })
                    }),
                    (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) }),
                    P,
                    O,
                    B,
                    V,
                    F,
                    Y,
                    G,
                    z,
                    ei,
                    ed,
                    ec,
                    eh,
                    eu,
                    em
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
        let l = (0, G.g7)(t, e),
            s = this.getError('bitrate');
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: ed,
                    children: ee.intl.string(ee.t.w2d0vb)
                }),
                '' !== s &&
                    (0, i.jsx)(h.R94, {
                        id: ec,
                        type: h.geA.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: en.marginBottom8,
                        children: s
                    }),
                (0, i.jsx)(h.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [q.Fc, q.epw, l],
                    minValue: q.Fc,
                    maxValue: l,
                    keyboardStep: q.V7H,
                    disabled: !n,
                    'aria-labelledby': ed,
                    'aria-describedby': null != s && '' !== s ? ec : eu
                }),
                l > q.epw
                    ? (0, i.jsx)(h.R94, {
                          id: eu,
                          type: h.geA.DESCRIPTION,
                          children: ee.intl.format(ee.t.SbQJk5, { bitrate: q.epw / 1000 })
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
            k.vg.has(e.type) &&
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
                value: q.Ucd.AUTO,
                name: ee.intl.string(ee.t.jjKYpq)
            },
            {
                value: q.Ucd.FULL,
                name: ee.intl.string(ee.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.xJW, {
                    title: ee.intl.string(ee.t.jhJEJi),
                    children: (0, i.jsx)(h.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : q.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: ee.intl.format(ee.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? ee.intl.string(ee.t.XX5ciY) : ee.intl.formatToPlainString(ee.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? q.xGv : q.$pe;
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: eh,
                    children: ee.intl.string(ee.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(h.R94, {
                        id: em,
                        type: h.geA.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: en.marginBottom8,
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
                    'aria-labelledby': eh,
                    'aria-describedby': null != n && '' !== n ? em : eg
                }),
                (0, i.jsx)(h.R94, {
                    id: eg,
                    type: h.geA.DESCRIPTION,
                    children: ee.intl.format(e.isGuildStageVoice() ? ee.t.OqZI8P : ee.t['8yb3JS'], {})
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
                label: ee.intl.string(ee.t.JEmsam),
                value: ex
            });
        let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : ex;
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.vwX, { children: ee.intl.string(ee.t.Ms8bX1) }),
                (0, i.jsx)(h.q4e, {
                    options: a,
                    value: r,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: ee.intl.string(ee.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t;
        let { theme: l } = this.props;
        return (
            (t = e.type === q.d4z.GUILD_CATEGORY ? ((0, u.wj)(l) ? n(309095) : n(925442)) : (0, u.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(Z.Z, {
                justify: Z.Z.Justify.CENTER,
                className: en.marginTop60,
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
                  title: ee.intl.string(ee.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(h.$i$, { className: a()(en.marginTop40, en.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
            ei(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(E.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: Y.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            ei(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, W.mB)(t.flags, Q.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, L.Z)(e, !1)) : q.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, G.Nj)(e)), (0, m.pW)({ name: e }));
            }),
            ei(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, L.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            ei(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: T.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            ei(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: T.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
            ei(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            ei(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            ei(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ei(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            ei(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            ei(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, W.mB)(t.flags, Q.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? q.d4z.GUILD_ANNOUNCEMENT : q.d4z.GUILD_TEXT });
            }),
            ei(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            ei(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ei(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            ei(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === ex ? null : e });
            }),
            ei(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            ei(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            ei(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            ei(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, W.mB)(t.flags, Q.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, W.mB)(t.flags, Q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
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
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, d.cj)([P.Z], () => P.Z.getProps()),
        a = (0, d.e7)([V.Z], () => {
            var e;
            return V.Z.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null);
        }),
        r = (0, d.e7)([M.Z], () => M.Z.theme),
        o = (0, d.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, I.C7)(t),
        u = (0, I.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([B.Z], () => ({
            canManageChannels: B.Z.can(q.Plq.MANAGE_CHANNELS, t),
            canSendMessages: B.Z.can(q.Plq.SEND_MESSAGES, t)
        })),
        g = (0, j.ZP)(t),
        p = D.default.getId(),
        x = (0, R.v)(),
        C = null == t ? void 0 : t.id,
        N = (0, v.ts)(t, !1, !0),
        b = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        Z = l.useCallback(
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
        handleSetDefaultLayout: Z,
        showChannelSummariesSettings: N,
        showAdvancedSlowModeSetting: b
    });
}
