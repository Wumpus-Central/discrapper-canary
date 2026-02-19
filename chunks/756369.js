n.d(t, { Ay: () => e0, OC: () => e1, iV: () => e$ }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    _ = n(397927),
    m = n(843472),
    h = n(475073),
    p = n(295843),
    g = n(488331),
    A = n(298481),
    x = n(121401),
    f = n(509282),
    C = n(909338),
    E = n(948729),
    I = n(150099),
    b = n(871751),
    T = n(510790),
    v = n(167189),
    S = n(175335),
    y = n(390248),
    N = n(282108),
    j = n(33358),
    L = n(704400),
    R = n(496376),
    P = n(795982),
    M = n(643612),
    w = n(613760),
    D = n(229527),
    k = n(870136),
    O = n(33525),
    U = n(484724),
    G = n(71755),
    B = n(178879),
    F = n(118331),
    H = n(520586),
    V = n(857071),
    W = n(384231),
    q = n(46054),
    Y = n(731068),
    z = n(619517),
    K = n(207133),
    Q = n(480191),
    J = n(269849),
    X = n(704413),
    Z = n(695206),
    $ = n(892742),
    ee = n(376708),
    et = n(549527),
    en = n(899894),
    ei = n(581034),
    el = n(50777),
    er = n(378058),
    ea = n(443642),
    es = n(406704),
    eo = n(996522),
    ed = n(253932),
    ec = n(383233),
    eu = n(961350),
    e_ = n(696451),
    em = n(834942),
    eh = n(576705),
    ep = n(287809),
    eg = n(644447),
    eA = n(954571),
    ex = n(927813),
    ef = n(659674),
    eC = n(661191),
    eE = n(998218),
    eI = n(988012),
    eb = n(294520),
    eT = n(141468),
    ev = n(863439),
    eS = n(869938),
    ey = n(143413),
    eN = n(707985),
    ej = n(443228),
    eL = n(341645),
    eR = n(986350),
    eP = n(439401),
    eM = n(990560),
    ew = n(266620),
    eD = n(860227),
    ek = n(564107),
    eO = n(763899),
    eU = n(652176),
    eG = n(382807),
    eB = n(394839),
    eF = n(96782),
    eH = n(573163),
    eV = n(861986),
    eW = n(343552),
    eq = n(581619),
    eY = n(652215),
    ez = n(985018),
    eK = n(867525);
let eQ = [eY.Auw.GIFV],
    eJ = 15 * ex.A.Millis.MINUTE,
    eX = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    eZ = (e) => () => {
        let { url: t, proxyUrl: n, width: l, height: r, flags: a } = e,
            s = (0, o.Lt)(a, Y.e5.IS_ANIMATED);
        return null != l && null != r && (z.bp.test(n) || (s && (z.P8.test(n) || z.p4.test(n))))
            ? (0, i.jsx)(eP.A, { width: l, height: r, src: n, url: t, format: c.TL.IMAGE, className: eK.jj })
            : null;
    };
class e$ extends l.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e) => {
        let { channel: t, message: n } = this.props;
        return {
            location: e,
            location_guild_id: t.getGuildId(),
            location_channel_id: t.id,
            location_channel_type: t.type,
            location_message_id: n.id,
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: r, poll: a } = this.props,
            { channel: s, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            l.type !== s.type ||
            d !== a ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            ((n = o.reactions) !== (i = r.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: r } = e,
                            { emoji: a, count: s, burst_count: o } = i[t];
                        return r !== o || l !== s || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            l = null;
        switch (n) {
            case eI.xC.MARK_AS_FALSE_POSITIVE:
                l = (0, i.jsx)(R.A, { messageId: e.id, channelId: t.id });
                break;
            case eI.xC.AGE_VERIFICATION_RETRY:
                l = (0, i.jsx)(A.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eK.od, children: l });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: l, url: r } = t;
                  if (n === v.I.INVITE)
                      return this.shouldRenderInvite(l)
                          ? (0, i.jsx)(
                                eM.A,
                                { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                l,
                            )
                          : null;
                  if (n === v.I.TEMPLATE) return (0, i.jsx)(G.A, { code: l }, l);
                  if (n === v.I.EVENT) return (0, i.jsx)(U.A, { code: l }, l);
                  if (n === v.I.CHANNEL_LINK) return (0, i.jsx)(ej.A, { code: l, message: e }, l);
                  if (n === v.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(w.A, { code: l, message: e }, l);
                  else if (n === v.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: a } = (0, C.N)(r);
                      return (0, i.jsx)(
                          g.A,
                          { applicationId: l, message: e, referrerId: t, customId: n, linkId: a },
                          l,
                      );
                  } else if (n === v.I.GUILD_PRODUCT) return (0, i.jsx)(O.A, { code: l }, l);
                  else if (n === v.I.SERVER_SHOP) return (0, i.jsx)(S.A, { guildId: l }, l);
                  else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = l.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(el.A, { guildId: t, skuId: e, channel: n }, l);
                  } else if (n === v.I.QUESTS_EMBED) return (0, i.jsx)($.A, { questId: l }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(f.G, { appId: l, message: e }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, x.u)(l);
                      return null == t
                          ? null
                          : (0, i.jsx)(f.$, { appId: t.applicationId, skuId: t.skuId, message: e }, l);
                  } else if (n === v.I.APP_OAUTH2_LINK) return (0, i.jsx)(E.A, { applicationId: l, message: e }, l);
                  else if (n === v.I.COLLECTIBLES_SHOP) return null;
                  else if (n === v.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: l, type: r, content: a, giftInfo: s } = e,
            o = ep.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eK.zv,
                          children: (0, i.jsx)(h.A, {
                              code: e,
                              author: n,
                              channelId: l,
                              currentUser: o,
                              type: r,
                              content: a,
                              giftInfo: s,
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
            isLurking: r,
            isPendingMember: a,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eH.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: l,
                  isLurking: r,
                  isPendingMember: a,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: l,
                inlineAttachmentMedia: r,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ec._c)(e)) return null;
        let _ = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eY.sbO.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let m = _.map((t) => ({
                ...(0, Y.Rr)(t, e),
                original: t.url,
                srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eY.sbO.IS_ANIMATED),
            })).filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, J.o)(
                m,
                { enabledContentHarmTypeFlags: s, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = m.length > 1,
            A = (0, o.Lt)(u, eY.pr7.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, eb.iW)(e.originalItem, t);
        }
        let f = _.map((i) => {
            let s = (0, Y.aG)(i),
                o = {
                    message: e,
                    item: (0, eF.rC)(i, r),
                    autoPlayGif: n,
                    canRemoveItem: l && (_.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, s);
                              }
                            : void 0,
                    renderAudioComponent: A ? ew.SX : ew.Nj,
                    renderImageComponent: ew.Cr,
                    renderVideoComponent: ew.I1,
                    renderPlaintextFilePreview: ew.R6,
                    renderGenericFileComponent: ew.UB,
                    renderMosaicItemFooter: ew.YE,
                    onPlay: (e, n, l) => {
                        eA.default.track(eY.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: eZ(s),
                },
                d = (0, eg.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eB.A, { items: f });
    }
    renderEmbed = (e, t, n, l) => {
        let {
                gifAutoPlay: r,
                inlineEmbedMedia: a,
                canSuppressEmbeds: s,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eb.sC)(e, l, o, d);
        if (e.type === eY.Auw.GIFT) return null;
        let _ = eQ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            M.G.Provider,
            {
                value: (0, eW.b)(_, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(b.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: r,
                    hideMedia: !a,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
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
        e.type !== eY.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? q.A.parseEmbedTitleWithoutLinks : q.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eY.Auw.RICH
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
        e.shiftKey ? m.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
                      eq.z.has(t.type) ||
                      (0, ef.p6)(t) ||
                      ((0, B.f)(t) && !(0, F.d)(e)) ||
                      (0, ef.V)(t) ||
                      (0, ef.G8)(t)
                  )
                      return null;
                  let l = { renderImageComponent: eU.LL, renderVideoComponent: eU.$o, renderLinkComponent: eU.bU };
                  if (
                      t.type === eY.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let r = eE.A.safeParseWithQuery(t.url);
                      if (null != r && null != r.pathname) {
                          let a = r.pathname.split("/")[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  p.A,
                                  { skuId: a, renderFallback: () => this.renderEmbed(t, n, l, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, l, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: l,
            disableComponentInteractivity: r,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, i.jsx)(ek.N, {
            gifAutoPlay: t,
            getGifFavButton: eZ,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), a?.(t, e);
                      },
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(H.Ay, { message: e, shouldDisableInteractiveComponents: r }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eO.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eY.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(I.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eT.ec)(e)
            ? (0, i.jsx)(eR.A, {
                  message: e,
                  onDeleteMessage: () => {
                      m.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, er.o6)(e),
            { channel: n, isInteracting: l } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(ea.A, { channel: n, isInteracting: l, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eY.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eo.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eY.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eC.default.extractTimestamp(e.id) >= eJ)
        )
            return (0, i.jsx)("div", { className: eK.xM, children: ez.intl.string(ez.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(_.MJ3, {
            dismissable: !0,
            header: ez.intl.string(ez.t.VL1KOk),
            confirmText: ez.intl.string(ez.t.YEHppG),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eK.IX,
                    children: ez.intl.string(ez.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ez.intl.string(ez.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(_.MJ3, {
                  dismissable: !0,
                  header: ez.intl.string(ez.t.CbTIEo),
                  confirmText: ez.intl.string(ez.t.kFwAsa),
                  cancelText: ez.intl.string(ez.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      m.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(_.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eK.IX,
                      children: ez.intl.string(ez.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eG.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eL.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eY.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(Q.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(en.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, N.KM)(e)
            ? (0, i.jsx)(L.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(Z.A, { message: e, poll: t, className: eK.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(T.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(et.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(P.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eV.A, { message: e, compact: t, location: eV.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: l } = this.props,
            { showSuppressModal: r, showRemoveAttachmentModal: s } = this.state,
            o = this.renderEditedTag(t, l),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            m = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            x = this.renderStickersAccessories(t),
            f = this.renderThreadAccessories(t),
            C = this.renderComponentAccessories(t),
            E = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            b = this.renderInteractionPremiumUpsell(t),
            T = this.renderMediaPostEmbeds(t),
            v = this.renderSafetyPolicyNotice(t),
            S = this.renderSafetySystemNotification(t),
            y = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            j = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == m &&
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
            null == T &&
            null == v &&
            null != b &&
            null == N &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eD.XL)(t),
                  className: a()(e, eK.kL),
                  children: [
                      L,
                      j,
                      E,
                      N,
                      R,
                      d,
                      c,
                      T,
                      u,
                      _,
                      m,
                      y,
                      h,
                      x,
                      C,
                      I,
                      b,
                      o,
                      p,
                      g,
                      A,
                      r && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      f,
                      v,
                      S,
                  ],
              });
    }
}
function e0(e) {
    let { channel: t, message: n, renderSuppressEmbeds: l, isMessageSnapshot: r } = e,
        a = (0, d.bG)([eu.default], () => eu.default.getId()),
        s = ed.X6.useSetting(),
        c = ed.hD.useSetting(),
        u = ed.rs.useSetting() && !(0, ey.A)(e.message),
        _ = ed.jW.useSetting() && !1 !== e.renderReactions,
        m = ed.kt.useSetting(),
        h = (0, d.bG)([em.A], () => null == t.guild_id || em.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([V.A], () => null != t.guild_id && V.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([e_.Ay, ep.default], () => {
            let e = ep.default.getCurrentUser();
            return (null != t.guild_id && null != e ? e_.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: x } = (0, d.cf)(
            [eh.A],
            () => ({
                canAddNewReactions: h && eh.A.can(eY.xBc.ADD_REACTIONS, t),
                canManageMessages: eh.A.can(eY.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        f = (0, D.ix)(t.guild_id),
        [, C] = (0, k.c)(t.guild_id),
        E = (0, es.Id)(t),
        I =
            (a === n.author.id || x) &&
            n.author.id !== eY.oIV &&
            !1 !== l &&
            !(0, o.Lt)(n.flags, eY.pr7.EPHEMERAL) &&
            E &&
            (0, eS.A)(n) >= 1,
        b = a === n.author.id && E && !r,
        T = n.author.id === a,
        v = n.isFirstMessageInForumPost(t),
        S = (0, eN.A)({
            channel: t,
            canChat: h,
            renderReactions: _,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: E,
            isAutomodQuarantined: f,
        }),
        N = (0, W.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, K.A)(t?.id),
        R = (0, X.A)(n),
        P = (0, j.P)(n),
        M = (0, ev.z)(t),
        w = (0, eI._f)(n.id, n.channel_id),
        O = (0, y._R)();
    return (0, i.jsx)(e$, {
        canSuppressEmbeds: I,
        canDeleteAttachments: b,
        ...S,
        disableReactionReads: !!v || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && M,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: T,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: m,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: N,
        showMaskedLinks: N,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: w,
        shouldAgeVerify: O,
    });
}
let e1 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: l = !1,
            renderThreadAccessory: r = !1,
            disableReactionCreates: a = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = ed.X6.useSetting(),
        u = ed.hD.useSetting(),
        _ = ed.rs.useSetting(),
        m = ed.kt.useSetting(),
        h = (0, W.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, K.A)(n?.id),
        g = (0, j.P)(t),
        A = (0, eI._f)(t.id, t.channel_id),
        x = (0, X.A)(t);
    return (0, i.jsx)(e$, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: l,
        disableReactionCreates: a,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: r,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: _,
        gifAutoPlay: m,
        poll: x,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
