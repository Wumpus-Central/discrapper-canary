(t.d(l, { rr: () => eh, Ay: () => ep }), t(321073));
var r = t(477900),
    n = t(582128),
    i = t(503698),
    s = t.n(i),
    a = t(317097),
    o = t(251843),
    d = t(939249),
    u = t(789645),
    h = t(775602),
    c = t(567243),
    m = t(652215);
function p(e) {
    return "music.apple.com" === e;
}
var g = t(855986),
    x = t(462887),
    y = t(413599);
let f = Object.freeze({
    EMBED: (e, l, t) => `https://embed.music.apple.com/${e}?theme=${l}&i=${null != t ? encodeURIComponent(t) : ""}`,
});
var w = t(411517);
function b(e) {
    let {
            className: l,
            embed: { url: t },
        } = e,
        n = (0, g.bG)([y.A], () => (0, x.M)(y.A.theme));
    if (null == t) return null;
    let i = null,
        a = null,
        o = null;
    try {
        let e = c.qg(t, !0);
        ((i = e.host), (a = e.pathname), (o = e.query.i ?? null), Array.isArray(o) && (o = o[0]));
    } catch (e) {
        return null;
    }
    if (!p(i) || null == a) return null;
    let d = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(a) ? 2 : 1,
        u = a.split("/"),
        h = u[d]?.toLowerCase();
    null != o && (h = "song");
    let m = 450;
    return (
        "song" === h ? (m = 175) : "music-video" === h && (m = 371),
        (a = a.substr(1)),
        (0, r.jsx)("iframe", {
            className: s()(w.li, l),
            src: f.EMBED(a, n ? "dark" : "light", o),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: m },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
var v = t(338717),
    A = t(643612),
    I = t(731068);
let j = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function S(e) {
    let l = null,
        t = null,
        r = null;
    try {
        ((l = (r = c.qg(e, !0)).host), (t = r.pathname));
    } catch (e) {
        return null;
    }
    return null != r && j.test(l ?? "") && null != t ? r : null;
}
function C(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: n },
    } = e;
    if (null == t || null == n) return null;
    let i = S(t);
    if (null == i) return null;
    let a = i.query.iframe_url;
    if (null == a || Array.isArray(a) || null == S(a)) return null;
    let { width: o, height: d } = n,
        u = o,
        h = d;
    return (
        (o > 500 || d > 400) && (o > d ? ((u = 500), (h = (500 * d) / o)) : ((u = (400 * o) / d), (h = 400))),
        (0, r.jsx)("iframe", {
            className: s()(w.FS, l),
            src: a,
            style: { width: u, height: h },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
t(508300);
var E = t(607470);
t(516653);
var N = t(792996);
function P(e) {
    let {
            poster: l,
            src: t,
            width: i,
            height: s,
            naturalWidth: a,
            naturalHeight: o,
            play: d = !0,
            className: u,
            alt: h,
            responsive: c,
        } = e,
        m = n.useRef(null);
    return (n.useEffect(() => {
        let { current: e } = m;
        d
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [d]),
    (a <= 6016 && o <= 3384) || (a <= 3384 && o <= 6016))
        ? (0, r.jsx)(E.A, {
              ref: m,
              className: u,
              poster: l,
              src: t,
              width: i,
              height: s,
              responsive: c,
              muted: !0,
              loop: !0,
              autoPlay: d,
              playsInline: !0,
              preload: "none",
              "aria-label": h,
          })
        : (0, r.jsx)("img", { alt: "", src: l, width: i, height: s });
}
function T(e) {
    let {
        src: l,
        poster: t,
        naturalWidth: n,
        naturalHeight: i,
        responsive: s,
        autoPlay: a,
        className: o,
        playable: d = !0,
        renderImageComponent: u,
        alt: h = N.intl.string(N.t.I5gL2H),
        sourceMetadata: c,
        ...m
    } = e;
    return (0, r.jsx)(A.G.Consumer, {
        children: (e) =>
            u({
                ...m,
                alt: h,
                src: t,
                containerClassName: o,
                autoPlay: a,
                animated: d,
                freeze: !0,
                responsive: s,
                renderAccessory: e,
                tabIndex: d ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: a, animating: u, alt: h } = e;
                    return (0, r.jsx)(P, {
                        alt: h,
                        className: o,
                        poster: t,
                        src: l,
                        width: a.width,
                        height: a.height,
                        naturalWidth: n,
                        naturalHeight: i,
                        responsive: s,
                        play: d && u,
                    });
                },
                sourceMetadata: c,
                analyticsSource: "LazyGIFV",
            }),
    });
}
var L = t(619517),
    M = t(153440),
    W = t(875149),
    R = t(492230),
    _ = t(383055),
    k = t(349878),
    V = t(114212),
    D = t(343552),
    H = t(302031);
function U(e) {
    return null != e && "open.spotify.com" === e;
}
var O = t(628137),
    $ = t(272984);
function K(e) {
    let {
        className: l,
        embed: { url: t },
    } = e;
    if (null == t) return null;
    let n = null,
        i = null;
    try {
        let e = c.qg(t.replace(/intl-[^/]+\//, ""), !0);
        ((n = e.host), (i = e.pathname));
    } catch (e) {
        return null;
    }
    if (!U(n) || null == i) return null;
    let a = i.split("/"),
        o = null != a[1] ? a[1].toLowerCase() : null,
        d = s()(w.IL, l);
    if ("user" === o) {
        let e = null != a[3] ? a[3].toLowerCase() : null,
            l = a[4];
        return "playlist" !== e || null == l
            ? null
            : (0, r.jsx)(O.A, { className: d, resourceType: $.M0.PLAYLIST, resourceId: l });
    }
    let u = (0, $.NJ)(o),
        h = a[2];
    return null == u || null == h ? null : (0, r.jsx)(O.A, { className: d, resourceType: u, resourceId: h });
}
var F = t(734057),
    G = t(644447),
    B = t(129230),
    Y = t(188567),
    z = t(5377),
    q = t(659674),
    J = t(515718),
    Q = t(998218),
    X = t(912051),
    Z = t(693942);
function ee(e) {
    let { allowFullScreen: l, ref: t, ...n } = e,
        i = l ? `${Z.PE} allow-fullscreen` : Z.PE;
    return (0, r.jsx)("iframe", {
        ref: t,
        className: w.Qu,
        allow: l ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: i,
        allowFullScreen: l,
        ...n,
    });
}
function el(e) {
    var l;
    let t,
        { provider: i, src: s, autoMute: a, ...o } = e,
        d = n.useRef(null);
    ((l = i === Z.mt.TIKTOK),
        (t = n.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (a && d.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    d.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [a, d],
        )),
        n.useEffect(() => {
            if (l) return (window.addEventListener("message", t), () => window.removeEventListener("message", t));
        }, [l, t]));
    let u = (0, Z.x7)(s, i, { autoMute: a });
    return (0, r.jsx)(ee, { ref: d, src: u, ...o });
}
var et = t(183129);
let er = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    en = ["PlayStation"];
function ei(e) {
    let l = e.embed.url,
        t = e.embed.provider?.name;
    if (null == l || null == t) return null;
    let n = null;
    try {
        n = c.qg(l, !0);
    } catch (e) {
        return null;
    }
    let i = (function (e, l) {
        let { host: t, pathname: r } = l,
            n = [];
        if ((null != r && (n = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !er.includes(t) || 2 !== n.length) return null;
            let l = n[1];
            return {
                embedUrl: ((e = N.intl.currentLocale), `https://${t}/embed/${l}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(t, n);
    return null == i
        ? null
        : (0, r.jsx)("iframe", {
              src: i.embedUrl,
              className: s()(et.u, e.className),
              style: i.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
var es = t(692051),
    ea = t(838541),
    eo = t(768570),
    ed = t(165648);
function eu(e) {
    let l = Q.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}
function eh(e) {
    let {
            className: l,
            iframeWrapperClassName: t,
            maxWidth: i,
            maxHeight: a,
            thumbnail: o,
            video: d,
            provider: u,
            allowFullScreen: h = !0,
            responsive: c = !1,
            renderImageComponent: p,
            renderVideoComponent: g,
            renderLinkComponent: x,
            playable: y = !0,
            autoPlay: f = !1,
            autoMute: b,
            volume: v,
            onPlay: A,
            onPause: I,
            onEnded: j,
            onControlsHide: S,
            onControlsShow: C,
            onVolumeChange: E,
            onMute: N,
            disableClickToUnmute: P,
            href: T,
            placeholder: L,
            placeholderVersion: M,
            sourceMetadata: R,
        } = e,
        [_, k] = n.useState(f),
        V = null != d && null == d.proxyURL,
        D = n.useCallback(() => k(!1), [k]);
    function H(e) {
        (e.preventDefault(),
            e.stopPropagation(),
            A?.(!1),
            k(!0),
            V &&
                (Y._.dispatch(m.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                Y._.subscribeOnce(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, D)));
    }
    n.useEffect(
        () => () => {
            V && Y._.unsubscribe(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, D);
        },
        [V, D],
    );
    let { width: U, height: O } = o;
    null != d && ((U = d.width), (O = d.height));
    let $ = (0, J.Uj)({ width: U, height: O, maxWidth: i, maxHeight: a });
    ((U = Math.max($.width, 150)), (O = Math.max($.height, 144)));
    let K = (0, G.E)(o);
    if (null != d && null != d.proxyURL)
        return (0, r.jsx)("div", {
            className: s()(w.pu, l),
            children: g({
                poster: K,
                src: d.proxyURL,
                placeholder: L,
                placeholderVersion: M,
                width: U,
                height: O,
                responsive: c,
                autoPlay: f,
                onEnded: j,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: E,
                playable: y,
                autoMute: b,
                volume: v,
                onPlay: A,
                onPause: I,
                onMute: N,
                onControlsHide: S,
                onControlsShow: C,
                disableClickToUnmute: P,
                sourceMetadata: R,
            }),
        });
    if (_ && null != d) {
        let e,
            n = !0 === b || ("function" == typeof b && b()),
            o = { width: U, height: O },
            m = { width: U, height: O };
        if (c) {
            let l = 0 !== U ? O / U : 1;
            ((o = { maxWidth: i, maxHeight: a, width: void 0, height: void 0 }),
                (m = { paddingBottom: `${100 * l}%`, maxWidth: U }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: U, maxHeight: O }));
        }
        return (0, r.jsx)("div", {
            className: l,
            style: o,
            children: (0, r.jsx)("div", {
                className: s()(w.pu, t),
                style: m,
                children: (0, r.jsx)(el, {
                    provider: u,
                    src: d.url,
                    style: e,
                    width: U,
                    height: O,
                    allowFullScreen: h,
                    autoMute: n,
                }),
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: s()(w.pu, l),
        style: c ? { maxWidth: U } : { width: U, height: O },
        children: [
            p({
                src: K,
                width: U,
                height: O,
                maxWidth: U,
                maxHeight: O,
                responsive: c,
                containerClassName: w.tW,
                imageClassName: w.jq,
                placeholder: L,
                placeholderVersion: M,
                onClick: y && null != d ? H : null,
                sourceMetadata: R,
                analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
                className: w._W,
                children: (0, r.jsx)("div", {
                    className: w.Fo,
                    children: y
                        ? (0, r.jsx)(W.A, {
                              onPlay: null != d ? H : null,
                              externalURL: T,
                              renderLinkComponent: x,
                              messageId: R?.message?.id,
                              channelId: R?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function ec(e) {
    let {
        className: l,
        href: t,
        autoPlay: n,
        maxWidth: i,
        maxHeight: a,
        thumbnail: o,
        video: d,
        renderImageComponent: u,
        responsive: h,
        alt: c,
        disableAltTextDisplay: m = !1,
        playable: p = !0,
        hiddenSpoilers: g,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: f,
    } = e;
    return (0, r.jsx)(T, {
        className: s()(w.pu, l),
        original: t,
        poster: (0, G.E)(o),
        src: (0, G.E)(d),
        alt: c,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: i,
        maxHeight: a,
        responsive: h,
        autoPlay: n,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: f,
    });
}
function em(e) {
    let {
            images: l,
            message: t,
            autoPlayGif: i,
            hiddenSpoiler: s,
            isVisible: a,
            sourceMetadata: o,
            renderImageComponent: d,
        } = e,
        { disableAnimations: u } = n.useContext(es.Y),
        { srcToOnClickOverride: h, srcToHandlePreloadImage: c } = n.useMemo(
            () =>
                (0, R.o)(
                    l.map((e) => ({ ...(0, I.oU)(e, o, "IMAGE"), original: e.url, srcIsAnimated: e.srcIsAnimated })),
                    {},
                    "Embed",
                ),
            [l, o],
        ),
        p = n.useMemo(
            () =>
                l.map((e, l) => {
                    let n = (0, G.E)(e);
                    return {
                        message: t,
                        item: {
                            uniqueId: `${e.url}--${l}`,
                            originalItem: e,
                            type: "IMAGE",
                            downloadUrl: e.url,
                            width: e.width,
                            height: e.height,
                            srcIsAnimated: e.srcIsAnimated,
                        },
                        autoPlayGif: i && !u && !s,
                        onClick: h[n],
                        handlePreloadImage: c[n],
                        getObscureReason: () => null,
                        renderImageComponent: (l) =>
                            (0, r.jsx)(r.Fragment, {
                                children: d({
                                    ...l,
                                    src: n,
                                    original: e.url,
                                    alt:
                                        null == e.description || "" === e.description
                                            ? N.intl.string(N.t.X4IxWL)
                                            : e.description,
                                    disableAltTextDisplay: null == e.description || "" === e.description,
                                    mosaicStyleAlt: !0,
                                    placeholder: e.placeholder,
                                    placeholderVersion: e.placeholderVersion,
                                    srcIsAnimated: e.srcIsAnimated,
                                    hiddenSpoilers: s,
                                    shouldLink: a && l.shouldLink,
                                    sourceMetadata: o,
                                    analyticsSource: "Embed",
                                }),
                            }),
                        renderVideoComponent: m.tEg,
                        renderAudioComponent: m.tEg,
                        renderPlaintextFilePreview: m.tEg,
                        renderGenericFileComponent: m.tEg,
                        gifFavoriteButton: (0, D.b)(e.url, e),
                        canRemoveItem: !1,
                        canEditItem: !1,
                        onRemoveItem: m.tEg,
                        onEditItem: m.tEg,
                    };
                }),
            [l, t, i, u, s, a, h, c, o, d],
        );
    return (0, r.jsx)("div", { className: w.W$, children: (0, r.jsx)(k.A, { hideClipMessageNotice: !0, items: p }) });
}
class ep extends n.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
        },
        ...(0, q.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: n,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.zC, w.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, r.jsx)("div", {
                    className: s()(w.zC, w.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: w.Cj,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: n?.id,
                                  channelId: n?.channel_id,
                              })
                            : (0, r.jsx)("span", { children: l.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: n,
                autoPlayGif: i,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.rN, w.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, r.jsx)(es.Y.Consumer, {
                    children: (a) => {
                        let { disableAnimations: o } = a;
                        return (0, r.jsxs)("div", {
                            className: s()(w.rN, w.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: w.SG,
                                          src: i && !o ? l.iconProxyURL : eu(l.iconProxyURL),
                                      })
                                    : null,
                                null != l.url
                                    ? t({
                                          className: w.av,
                                          href: l.url,
                                          tabIndex: e ? 0 : -1,
                                          children: l.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: n?.id,
                                          channelId: n?.channel_id,
                                      })
                                    : (0, r.jsx)("span", { className: w.QQ, children: l.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, r.jsx)(V.F, { className: w.Jl, width: l, height: t, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: n, message: i } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.gt, w.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, r.jsx)("div", {
                    className: s()(w.gt, w.aK),
                    children:
                        null != o
                            ? t({
                                  className: w.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: n(l, a),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: i?.id,
                                  channelId: i?.channel_id,
                              })
                            : n(l, a),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: s()(w.cD, w.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({ width: 400, height: 50 })
                      : l(e, t, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: n,
                renderImageComponent: i,
                autoPlayGif: s,
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, r.jsx)(es.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return i({
                          containerClassName: w.ad,
                          src: (0, G.E)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: n,
                          shouldLink: e,
                          autoPlay: s && !o,
                          srcIsAnimated: l.srcIsAnimated,
                          placeholder: l.placeholder,
                          placeholderVersion: l.placeholderVersion,
                          alt:
                              null == l.description || "" === l.description ? N.intl.string(N.t.X4IxWL) : l.description,
                          disableAltTextDisplay: null == l.description || "" === l.description,
                          mosaicStyleAlt: !0,
                          sourceMetadata: a,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            n = null;
        for (let { rawName: r, rawValue: i, inline: s } of l)
            (s || null == n || (t.push(n), (n = null)),
                null == n && (n = []),
                n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]),
                (3 !== n.length && s) || (t.push(n), (n = null)));
        return (
            null != n && t.push(n),
            (0, r.jsx)("div", {
                className: w.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let i,
                            s,
                            [a, o] = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: w.Me,
                                style: { gridColumn: ((s = n * (i = 12 / t)), `${s + 1} / ${s + i + 1}`) },
                                children: [
                                    (0, r.jsx)("div", { className: w.$L, children: a }),
                                    (0, r.jsx)("div", { className: w.VN, children: o }),
                                ],
                            },
                            `${l}-${n}`,
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t, message: n, renderImageComponent: i, autoPlayGif: s } = this.props,
            { sourceMetadata: a } = this.state,
            { images: o } = t;
        return null == o || null == n
            ? null
            : (0, r.jsx)(em, {
                  images: o,
                  message: n,
                  autoPlayGif: s,
                  hiddenSpoiler: e,
                  isVisible: l,
                  sourceMetadata: a,
                  renderImageComponent: i,
              });
    }
    handleImageHover() {
        let e = F.A.getChannel(this.props.message?.channel_id);
        B.default.track(m.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        let {
                hiddenSpoiler: e = !1,
                isVisible: l = !0,
                image: t,
                alt: n = N.intl.string(N.t.X4IxWL),
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: i, className: a, autoPlayGif: o } = this.props,
            { maxMediaWidth: d, maxMediaHeight: u, sourceMetadata: h } = this.state;
        if (null == t) return null;
        let c = L.Ay.isAnimated({ src: (0, G.E)(t), original: t.url, animated: !1, srcIsAnimated: t.srcIsAnimated }),
            m = {
                containerClassName: s()(a, w.W$, w.Lw),
                src: (0, G.E)(t),
                alt: null == t.description || "" === t.description ? n : t.description,
                responsive: !0,
                limitResponsiveWidth: !0,
                width: t.width,
                height: t.height,
                maxWidth: d,
                maxHeight: u,
                original: t.url,
                shouldLink: l,
                disableAltTextDisplay: null == t.description || "" === t.description,
                hiddenSpoilers: e,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholderVersion,
                srcIsAnimated: t.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            p = t.url.split(".").pop()?.split("?")[0] ?? "";
        return (
            "jpg" === p && (p = "jpeg"),
            (0, r.jsx)(A.G.Consumer, {
                children: (l) =>
                    (0, r.jsx)(
                        es.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return i({
                                    ...m,
                                    autoPlay: o && !r && !e,
                                    renderAccessory: c ? l : null,
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: h,
                                    analyticsSource: "Embed",
                                });
                            },
                        },
                        t.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: l = !0,
                hiddenSpoiler: t = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: i, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: h,
                autoPlayGif: c,
                obscureReason: m,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: x } = this.state;
        if (null == n || null == i) return null;
        if (e)
            return null == s
                ? null
                : (0, r.jsx)(es.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, r.jsx)(ec, {
                              className: w.W$,
                              href: n,
                              thumbnail: i,
                              video: s,
                              maxWidth: p,
                              maxHeight: g,
                              responsive: !0,
                              autoPlay: !t && c && !a && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != m,
                              placeholder: s.placeholder,
                              placeholderVersion: s.placeholderVersion,
                              sourceMetadata: x,
                          });
                      },
                  });
        let y = () => {
                this.setState({ videoControlsShown: !0 });
            },
            f = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, r.jsx)(eh, {
            className: w.W$,
            href: n,
            allowFullScreen: h,
            thumbnail: i,
            video: s,
            provider: (0, q.QY)(a?.name, s?.url),
            maxWidth: p,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: y,
            onControlsHide: f,
            playable: l && !t,
            placeholder: s?.placeholder,
            placeholderVersion: s?.placeholderVersion,
            sourceMetadata: x,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
        return null != l
            ? (0, r.jsx)(es.Y.Consumer, {
                  children: (n) => {
                      let { disableAnimations: i } = n;
                      return (0, r.jsxs)("div", {
                          className: s()(w.te, w.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, r.jsx)("img", {
                                        alt: "",
                                        className: w.mG,
                                        src: e && !i ? l.iconProxyURL : eu(l.iconProxyURL),
                                    })
                                  : null,
                              (0, r.jsxs)("span", {
                                  className: w.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, r.jsx)("span", { className: w.i8, children: "\u2022" })
                                          : null,
                                      null != t ? (0, z.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, r.jsx)("div", {
                    className: s()(w.te, w.aK),
                    children: (0, r.jsx)("span", { className: w.oy, children: (0, z.mk)(t) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: n } = this.state,
            i = l.image ?? l.video;
        if (null == i) return null;
        let { width: s, height: a } = (0, J.Uj)({ width: i.width, height: i.height, maxWidth: t, maxHeight: n });
        return (0, r.jsx)(o._, {
            className: e,
            readyState: m.Rv1.READY,
            src: "",
            width: s,
            height: a,
            maxWidth: t,
            maxHeight: n,
            mediaLayoutType: ea.d.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderAudio(e) {
        let { audio: l, hiddenSpoiler: t, isVisible: n } = e;
        return (0, r.jsx)(M.Ay, {
            src: l.proxyURL,
            type: M.Ay.Types.AUDIO,
            mimeType: null != l.contentType ? [l.contentType] : void 0,
            autoPlay: !1,
            playable: n && !t,
            renderLinkComponent: _.bU,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (l.type) {
            case m.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: t });
            case m.Auw.AUDIO:
                if (null != l.audio) return this.renderAudio({ audio: l.audio, hiddenSpoiler: e, isVisible: t });
                return this.renderImage({ hiddenSpoiler: e, isVisible: t, image: l.image, alt: l.rawTitle });
            case m.Auw.VIDEO:
            default:
                if (null != l.video) return this.renderVideo({ gifv: !1, hiddenSpoiler: e, isVisible: t });
                if (null != l.images) return this.renderImages({ hiddenSpoiler: e, isVisible: t });
                return this.renderImage({ hiddenSpoiler: e, isVisible: t, image: l.image, alt: l.rawTitle });
        }
    }
    renderAll() {
        let e,
            { embed: l, hideMedia: t } = this.props,
            { isVisible: r } = this.state,
            n = this.renderProvider(r),
            i = this.renderAuthor(r),
            s = this.renderTitle(r),
            a = eo.Mg.has(l.type) ? null : this.renderDescription(),
            o = this.renderFields();
        t || (e = this.renderMedia(!r));
        let d = this.renderFooter(),
            u = null == e;
        return (
            (l.type === m.Auw.RICH || l.type === m.Auw.AUDIO) && (u = null == l.video),
            {
                provider: n,
                author: i,
                title: s,
                description: a,
                thumbnail: !t && u ? this.renderThumbnail(r) : null,
                fields: o,
                media: e,
                footer: d,
            }
        );
    }
    onReveal = () => {
        this.setState({ isVisible: !0 });
    };
    onToggleObscurity = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: r, type: n, thumbnail: i },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = l ?? r;
        if (null == o) return;
        let { width: d } = (0, J.Uj)({ width: o.width, height: o.height, maxWidth: s, maxHeight: a });
        if (!e && (n === m.Auw.VIDEO || d >= 300)) return d + 32;
        if (n === m.Auw.RICH && void 0 !== t) return 520;
        if (n === m.Auw.GIFV) {
            let { width: e } = (0, J.Uj)({
                width: r?.width ?? i?.width ?? 0,
                height: r?.height ?? i?.height ?? 0,
                maxWidth: s,
                maxHeight: a,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, q.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(d.D, {
            focusProps: { offset: { bottom: 4 } },
            className: w.PP,
            onClick: e,
            "aria-label": N.intl.string(N.t.GT3fNz),
            children: (0, r.jsx)(u.XSmallIcon, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: t, className: n } = e.props,
                i = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
                "aria-hidden": l,
                className: s()(w.JY, n, {
                    [w.gT]: t === v.Oc.SPOILER,
                    [w.We]: e.shouldObscure,
                    [w.dK]: l,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: i },
                children: e.renderMedia(l),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === m.Auw.IMAGE ||
            e.type === m.Auw.VIDEO ||
            e.type === m.Auw.GIFV ||
            ((e.type === m.Auw.RICH || e.type === m.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    renderEmbedContent = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { className: t, onSuppressEmbed: n, obscureReason: i } = e.props,
                {
                    provider: a,
                    author: o,
                    title: d,
                    description: u,
                    fields: h,
                    thumbnail: c,
                    media: m,
                    footer: p,
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: s()(t, w.vO, ed.PT, {
                    [w.dK]: l,
                    [w.o4]: i === v.Oc.SPOILER,
                    [w.q$]: e.shouldObscure,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": l,
                style: { borderLeftColor: e.getEmbedColor(l), maxWidth: e.getMaxWidth(!1) },
                children: (0, r.jsx)("div", {
                    className: w.UT,
                    children: (0, r.jsxs)("div", {
                        className: s()({ [w.Vg]: !0, [w.$H]: null != c }),
                        children: [null != n ? e.renderSuppressButton(n) : null, a, o, d, u, h, m, c, p],
                    }),
                }),
            });
        };
    })();
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return null == l || 0xffffff === l || e ? void 0 : (0, a.$k)(l, !0);
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: r, type: n, rawDescription: i },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === t && n !== m.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                    { width: r } = (0, J.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: s,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t,
                    });
                o = r;
            }
        }
        let d = 150 / (h.Ay.fontScale / 100),
            u = null != i ? (0, X.W)(i) : 0,
            c = (i?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === o || u >= d || c ? "max-content" : o, justifySelf: "auto" };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && v._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        let { embed: e, obscureReason: l, className: t } = this.props;
        return null != e.provider && en.includes(e.provider.name)
            ? (0, r.jsx)(ei, { embed: e, className: t })
            : (function (e) {
                    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== m.Auw.LINK) return !1;
                    try {
                        let l = c.qg(e.url, !0).host;
                        return U(l);
                    } catch (e) {
                        return !1;
                    }
                })(e)
              ? (0, r.jsx)(K, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === m.Auw.RICH
                ? (0, r.jsx)(C, { embed: e, className: t })
                : (function (e) {
                        if (
                            null == e.url ||
                            e.provider?.name !== "Apple Music" ||
                            (e.type !== m.Auw.ARTICLE && e.type !== m.Auw.LINK)
                        )
                            return !1;
                        try {
                            let l = c.qg(e.url, !0).host;
                            return p(l);
                        } catch (e) {
                            return !1;
                        }
                    })(e)
                  ? (0, r.jsx)(b, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(H.Ay, {
                              type: H.Ay.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: s()({
                                  [w.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(H.Ay, {
                            type: H.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: l,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
}
