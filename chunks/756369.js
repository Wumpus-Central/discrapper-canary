n.d(t, { Ay: () => e7, OC: () => e9, iV: () => e2 }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    m = n(397927),
    _ = n(843472),
    h = n(488331),
    p = n(298481),
    g = n(121401),
    A = n(509282),
    x = n(909338),
    f = n(948729),
    C = n(150099),
    E = n(871751),
    I = n(510790),
    v = n(167189),
    b = n(175335),
    T = n(390248),
    N = n(282108),
    y = n(33358),
    S = n(704400),
    j = n(496376),
    L = n(795982),
    R = n(643612),
    P = n(613760),
    D = n(229527),
    M = n(870136),
    w = n(33525),
    O = n(484724),
    k = n(71755),
    U = n(21599),
    B = n(178879),
    G = n(118331),
    F = n(520586),
    H = n(857071),
    V = n(384231),
    q = n(46054),
    W = n(731068),
    Y = n(619517),
    z = n(207133),
    Q = n(480191),
    K = n(269849),
    J = n(704413),
    X = n(695206),
    Z = n(892742),
    $ = n(376708),
    ee = n(549527),
    et = n(302031),
    en = n(899894),
    ei = n(581034),
    el = n(50777),
    es = n(378058),
    er = n(443642),
    ea = n(406704),
    eo = n(996522),
    ed = n(253932),
    ec = n(383233),
    eu = n(961350),
    em = n(696451),
    e_ = n(834942),
    eh = n(576705),
    ep = n(287809),
    eg = n(644447),
    eA = n(954571),
    ex = n(927813),
    ef = n(659674),
    eC = n(661191),
    eE = n(998218),
    eI = n(988012),
    ev = n(294520),
    eb = n(141468),
    eT = n(863439),
    eN = n(869938),
    ey = n(143413),
    eS = n(707985),
    ej = n(443228),
    eL = n(875033),
    eR = n(341645),
    eP = n(986350),
    eD = n(439401),
    eM = n(466802),
    ew = n(990560),
    eO = n(266620),
    ek = n(860227),
    eU = n(564107),
    eB = n(763899),
    eG = n(652176),
    eF = n(382807),
    eH = n(394839),
    eV = n(96782),
    eq = n(573163),
    eW = n(861986),
    eY = n(937266),
    ez = n(343552),
    eQ = n(581619),
    eK = n(652215),
    eJ = n(985018),
    eX = n(952303);
let eZ = [eK.Auw.GIFV],
    e$ = 15 * ex.A.Millis.MINUTE,
    e0 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: l, height: s, flags: r } = e,
            a = (0, o.Lt)(r, W.e5.IS_ANIMATED);
        return null != l && null != s && (Y.bp.test(n) || (a && (Y.P8.test(n) || Y.p4.test(n))))
            ? (0, i.jsx)(eD.A, { width: l, height: s, src: n, url: t, format: c.TL.IMAGE, className: eX.jj })
            : null;
    };
class e2 extends l.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, U._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            l.type !== a.type ||
            d !== r ||
            o.codedLinks !== s.codedLinks ||
            o.flags !== s.flags ||
            o.giftCodes !== s.giftCodes ||
            o.attachments !== s.attachments ||
            o.embeds !== s.embeds ||
            o.components !== s.components ||
            o.activity !== s.activity ||
            ((n = o.reactions) !== (i = s.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: s } = e,
                            { emoji: r, count: a, burst_count: o } = i[t];
                        return s !== o || l !== a || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            l = null;
        switch (n) {
            case eI.xC.MARK_AS_FALSE_POSITIVE:
                l = (0, i.jsx)(j.A, { messageId: e.id, channelId: t.id });
                break;
            case eI.xC.AGE_VERIFICATION_RETRY:
                l = (0, i.jsx)(p.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eX.od, children: l });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: l, url: s } = t;
                  if (n === v.I.INVITE)
                      return this.shouldRenderInvite(l)
                          ? (0, i.jsx)(
                                ew.A,
                                { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                l,
                            )
                          : null;
                  if (n === v.I.TEMPLATE) return (0, i.jsx)(k.A, { code: l }, l);
                  if (n === v.I.EVENT) return (0, i.jsx)(O.A, { code: l }, l);
                  if (n === v.I.CHANNEL_LINK) return (0, i.jsx)(ej.A, { code: l, message: e }, l);
                  if (n === v.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, { code: l, message: e }, l);
                  else if (n === v.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: r } = (0, x.N)(s);
                      return (0, i.jsx)(
                          h.A,
                          { applicationId: l, message: e, referrerId: t, customId: n, linkId: r },
                          l,
                      );
                  } else if (n === v.I.GUILD_PRODUCT) return (0, i.jsx)(w.A, { code: l }, l);
                  else if (n === v.I.SERVER_SHOP) return (0, i.jsx)(b.A, { guildId: l }, l);
                  else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = l.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(el.A, { guildId: t, skuId: e, channel: n }, l);
                  } else if (n === v.I.QUESTS_EMBED) return (0, i.jsx)(Z.A, { questId: l }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(A.G, { appId: l, message: e }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, g.u)(l);
                      return null == t
                          ? null
                          : (0, i.jsx)(A.$, { appId: t.applicationId, skuId: t.skuId, message: e }, l);
                  } else if (n === v.I.APP_OAUTH2_LINK) return (0, i.jsx)(f.A, { applicationId: l, message: e }, l);
                  else if (n === v.I.COLLECTIBLES_SHOP) return null;
                  else if (n === v.I.EXPERIMENT) return null;
                  else if (n === v.I.GORILLA_DEEP_LINK) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: l, type: s, content: r, giftInfo: a } = e,
            o = ep.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eX.zv,
                          children: (0, i.jsx)(eM.A, {
                              code: e,
                              author: n,
                              channelId: l,
                              currentUser: o,
                              type: s,
                              content: r,
                              giftInfo: a,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: l,
            isLurking: s,
            isPendingMember: r,
            channel: a,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eq.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: l,
                  isLurking: s,
                  isPendingMember: r,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: l,
                inlineAttachmentMedia: s,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ec._c)(e)) return null;
        let m = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eK.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let _ = m
                .map((t) => ({
                    ...(0, W.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eK.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, K.o)(
                _,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = _.length > 1,
            A = (0, o.Lt)(u, eK.pr7.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, ev.iW)(e.originalItem, t);
        }
        let f = m.map((i) => {
            let a = (0, W.aG)(i),
                o = {
                    message: e,
                    item: (0, eV.rC)(i, s),
                    autoPlayGif: n,
                    canRemoveItem: l && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), r(e, a);
                              }
                            : void 0,
                    renderAudioComponent: A ? eO.SX : eO.Nj,
                    renderImageComponent: eO.Cr,
                    renderVideoComponent: eO.I1,
                    renderPlaintextFilePreview: eO.R6,
                    renderGenericFileComponent: eO.UB,
                    renderMosaicItemFooter: eO.YE,
                    onPlay: (e, n, l) => {
                        eA.default.track(eK.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: e1(a),
                },
                d = (0, eg.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eH.A, { items: f });
    }
    renderEmbed = (e, t, n, l) => {
        let {
                gifAutoPlay: s,
                inlineEmbedMedia: r,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, ev.sC)(e, l, o, d);
        if (e.type === eK.Auw.GIFT) return null;
        let m = eZ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            R.G.Provider,
            {
                value: (0, ez.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(E.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: s,
                    hideMedia: !r,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: a ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: l,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eK.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? q.A.parseEmbedTitleWithoutLinks : q.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eK.Auw.RICH
            ? q.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? _.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eQ.z.has(t.type) ||
                      (0, ef.p6)(t) ||
                      ((0, B.f)(t) && !(0, G.d)(e)) ||
                      (0, ef.V)(t) ||
                      (0, ef.G8)(t)
                  )
                      return null;
                  if (t.type === eK.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: s,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, ev.sC)(t, e, d, s),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, i.jsx)(
                                  eL.A,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: e1,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), a?.(t, e);
                                                },
                                      shouldHideMediaOptions: r,
                                      enabledContentHarmTypeFlags: s,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, i.jsx)(
                                et.Ay,
                                {
                                    type: et.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let s = { renderImageComponent: eG.LL, renderVideoComponent: eG.$o, renderLinkComponent: eG.bU };
                  if (
                      t.type === eK.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let l = eE.A.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let r = l.pathname.split("/")[3];
                          if (null != r)
                              return (0, i.jsx)(
                                  eY.A,
                                  { skuId: r, renderFallback: () => this.renderEmbed(t, n, s, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, s, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: l,
            disableComponentInteractivity: s,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, i.jsx)(eU.N, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(F.Ay, { message: e, shouldDisableInteractiveComponents: s }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eB.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(C.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eb.ec)(e)
            ? (0, i.jsx)(eP.A, {
                  message: e,
                  onDeleteMessage: () => {
                      _.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, es.o6)(e),
            { channel: n, isInteracting: l } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(er.A, { channel: n, isInteracting: l, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eo.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eK.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eC.default.extractTimestamp(e.id) >= e$)
        )
            return (0, i.jsx)("div", { className: eX.xM, children: eJ.intl.string(eJ.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(m.MJ3, {
            dismissable: !0,
            header: eJ.intl.string(eJ.t.VL1KOk),
            confirmText: eJ.intl.string(eJ.t.YEHppG),
            cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eX.IX,
                    children: eJ.intl.string(eJ.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eJ.intl.string(eJ.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(m.MJ3, {
                  dismissable: !0,
                  header: eJ.intl.string(eJ.t.CbTIEo),
                  confirmText: eJ.intl.string(eJ.t.kFwAsa),
                  cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      _.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eX.IX,
                      children: eJ.intl.string(eJ.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== a.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eF.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eR.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(Q.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(en.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, N.KM)(e)
            ? (0, i.jsx)(S.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(X.A, { message: e, poll: t, className: eX.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(I.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, $.Mn)(e, this.props.channel)) return (0, i.jsx)(ee.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, $.Mn)(e, this.props.channel)) return (0, i.jsx)(L.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eW.A, { message: e, compact: t, location: eW.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: l } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: a } = this.state,
            o = this.renderEditedTag(t, l),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            _ = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            x = this.renderStickersAccessories(t),
            f = this.renderThreadAccessories(t),
            C = this.renderComponentAccessories(t),
            E = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            b = this.renderMediaPostEmbeds(t),
            T = this.renderSafetyPolicyNotice(t),
            N = this.renderSafetySystemNotification(t),
            y = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            j = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == _ &&
            null == h &&
            null == p &&
            null == c &&
            null == g &&
            null == A &&
            null == x &&
            null == f &&
            null == C &&
            null == I &&
            null == E &&
            null == b &&
            null == T &&
            null != v &&
            null == S &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, ek.XL)(t),
                  className: r()(e, eX.kL),
                  children: [
                      L,
                      j,
                      E,
                      S,
                      R,
                      d,
                      c,
                      b,
                      u,
                      m,
                      _,
                      y,
                      h,
                      x,
                      C,
                      I,
                      v,
                      o,
                      p,
                      g,
                      A,
                      s && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      f,
                      T,
                      N,
                  ],
              });
    }
}
function e7(e) {
    let { channel: t, message: n, renderSuppressEmbeds: l, isMessageSnapshot: s } = e,
        r = (0, d.bG)([eu.default], () => eu.default.getId()),
        a = ed.X6.useSetting(),
        c = ed.hD.useSetting(),
        u = ed.rs.useSetting() && !(0, ey.A)(e.message),
        m = ed.jW.useSetting() && !1 !== e.renderReactions,
        _ = ed.kt.useSetting(),
        h = (0, d.bG)([e_.A], () => null == t.guild_id || e_.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([H.A], () => null != t.guild_id && H.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([em.Ay, ep.default], () => {
            let e = ep.default.getCurrentUser();
            return (null != t.guild_id && null != e ? em.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: x } = (0, d.cf)(
            [eh.A],
            () => ({
                canAddNewReactions: h && eh.A.can(eK.xBc.ADD_REACTIONS, t),
                canManageMessages: eh.A.can(eK.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        f = (0, D.ix)(t.guild_id),
        [, C] = (0, M.c)(t.guild_id),
        E = (0, ea.Id)(t),
        I =
            (r === n.author.id || x) &&
            n.author.id !== eK.oIV &&
            !1 !== l &&
            !(0, o.Lt)(n.flags, eK.pr7.EPHEMERAL) &&
            E &&
            (0, eN.A)(n) >= 1,
        v = r === n.author.id && E && !s,
        b = n.author.id === r,
        N = n.isFirstMessageInForumPost(t),
        S = (0, eS.A)({
            channel: t,
            canChat: h,
            renderReactions: m,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: E,
            isAutomodQuarantined: f,
        }),
        j = (0, V.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, z.A)(t?.id),
        R = (0, J.A)(n),
        P = (0, y.P)(n),
        w = (0, eT.z)(t),
        O = (0, eI._f)(n.id, n.channel_id),
        k = (0, T._R)();
    return (0, i.jsx)(e2, {
        canSuppressEmbeds: I,
        canDeleteAttachments: v,
        ...S,
        disableReactionReads: !!N || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && w,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: b,
        inlineAttachmentMedia: a,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: _,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: O,
        shouldAgeVerify: k,
    });
}
let e9 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: l = !1,
            renderThreadAccessory: s = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = ed.X6.useSetting(),
        u = ed.hD.useSetting(),
        m = ed.rs.useSetting(),
        _ = ed.kt.useSetting(),
        h = (0, V.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, z.A)(n?.id),
        g = (0, y.P)(t),
        A = (0, eI._f)(t.id, t.channel_id),
        x = (0, J.A)(t);
    return (0, i.jsx)(e2, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: l,
        disableReactionCreates: r,
        disableReactionUpdates: a,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: s,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: _,
        poll: x,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
