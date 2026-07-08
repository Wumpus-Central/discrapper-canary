n.d(t, { t: () => tu });
var r = n(248702),
    i = n(695742),
    { entries: l, setPrototypeOf: s, isFrozen: a, getPrototypeOf: o, getOwnPropertyDescriptor: c } = Object,
    { freeze: p, seal: u, create: h } = Object,
    { apply: d, construct: f } = "u" > typeof Reflect && Reflect;
(p ||= function (e) {
    return e;
}),
    (u ||= function (e) {
        return e;
    }),
    (d ||= function (e, t) {
        var n = [...arguments].slice(2);
        return e.apply(t, n);
    }),
    (f ||= function (e) {
        return new e(...[...arguments].slice(1));
    });
var g = C(Array.prototype.forEach),
    m = C(Array.prototype.lastIndexOf),
    k = C(Array.prototype.pop),
    b = C(Array.prototype.push),
    x = C(Array.prototype.splice),
    w = C(String.prototype.toLowerCase),
    y = C(String.prototype.toString),
    T = C(String.prototype.match),
    S = C(String.prototype.replace),
    A = C(String.prototype.indexOf),
    R = C(String.prototype.trim),
    _ = C(Object.prototype.hasOwnProperty),
    E = C(RegExp.prototype.test),
    N =
        ((I = TypeError),
        function () {
            return f(I, [...arguments]);
        });
function C(e) {
    return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        var n = [...arguments].slice(1);
        return d(e, t, n);
    };
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w;
    s && s(e, null);
    let r = t.length;
    for (; r--; ) {
        let i = t[r];
        if ("string" == typeof i) {
            let e = n(i);
            e !== i && (a(t) || (t[r] = e), (i = e));
        }
        e[i] = !0;
    }
    return e;
}
function L(e) {
    let t = h(null);
    for (let [n, r] of l(e))
        _(e, n) &&
            (Array.isArray(r)
                ? (t[n] = (function (e) {
                      for (let t = 0; t < e.length; t++) _(e, t) || (e[t] = null);
                      return e;
                  })(r))
                : r && "object" == typeof r && r.constructor === Object
                  ? (t[n] = L(r))
                  : (t[n] = r));
    return t;
}
function D(e, t) {
    for (; null !== e; ) {
        let n = c(e, t);
        if (n) {
            if (n.get) return C(n.get);
            if ("function" == typeof n.value) return C(n.value);
        }
        e = o(e);
    }
    return function () {
        return null;
    };
}
var I,
    z,
    $ = p(
        "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(
            ".",
        ),
    ),
    O = p(
        "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(
            ".",
        ),
    ),
    M = p([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
    ]),
    P = p([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use",
    ]),
    B = p(
        "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(
            ".",
        ),
    ),
    U = p([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none",
    ]),
    H = p(["#text"]),
    F = p(
        "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(
            ".",
        ),
    ),
    q = p(
        "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(
            ".",
        ),
    ),
    G = p(
        "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(
            ".",
        ),
    ),
    W = p(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    j = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    Z = u(/<%[\w\W]*|[\w\W]*%>/gm),
    Y = u(/\$\{[\w\W]*/gm),
    Q = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    X = u(/^aria-[\-\w]+$/),
    K = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    V = u(/^(?:\w+script|data):/i),
    J = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    ee = u(/^html$/i),
    et = Object.freeze({
        __proto__: null,
        ARIA_ATTR: X,
        ATTR_WHITESPACE: J,
        CUSTOM_ELEMENT: u(/^[a-z][.\w]*(-[.\w]+)+$/i),
        DATA_ATTR: Q,
        DOCTYPE_NAME: ee,
        ERB_EXPR: Z,
        IS_ALLOWED_URI: K,
        IS_SCRIPT_OR_DATA: V,
        MUSTACHE_EXPR: j,
        TMPLIT_EXPR: Y,
    }),
    en = function (e, t) {
        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
        let n = null,
            r = "data-tt-policy-suffix";
        t && t.hasAttribute(r) && (n = t.getAttribute(r));
        let i = "dompurify" + (n ? "#" + n : "");
        try {
            return e.createPolicy(i, { createHTML: (e) => e, createScriptURL: (e) => e });
        } catch {
            return console.warn("TrustedTypes policy " + i + " could not be created."), null;
        }
    },
    er = function () {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
        };
    },
    ei = (function e() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : typeof window > "u" ? null : window,
            n = (t) => e(t);
        if (((n.version = "3.3.3"), (n.removed = []), !t || !t.document || 9 !== t.document.nodeType || !t.Element))
            return (n.isSupported = !1), n;
        let { document: r } = t,
            i = r,
            s = i.currentScript,
            {
                DocumentFragment: a,
                HTMLTemplateElement: o,
                Node: c,
                Element: u,
                NodeFilter: d,
                NamedNodeMap: f = t.NamedNodeMap || t.MozNamedAttrMap,
                HTMLFormElement: C,
                DOMParser: I,
                trustedTypes: z,
            } = t,
            j = u.prototype,
            Z = D(j, "cloneNode"),
            Y = D(j, "remove"),
            Q = D(j, "nextSibling"),
            X = D(j, "childNodes"),
            V = D(j, "parentNode");
        if ("function" == typeof o) {
            let e = r.createElement("template");
            e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
        }
        let J,
            ei = "",
            { implementation: el, createNodeIterator: es, createDocumentFragment: ea, getElementsByTagName: eo } = r,
            { importNode: ec } = i,
            ep = er();
        n.isSupported = "function" == typeof l && "function" == typeof V && el && void 0 !== el.createHTMLDocument;
        let {
                MUSTACHE_EXPR: eu,
                ERB_EXPR: eh,
                TMPLIT_EXPR: ed,
                DATA_ATTR: ef,
                ARIA_ATTR: eg,
                IS_SCRIPT_OR_DATA: em,
                ATTR_WHITESPACE: ek,
                CUSTOM_ELEMENT: eb,
            } = et,
            { IS_ALLOWED_URI: ex } = et,
            ew = null,
            ey = v({}, [...$, ...O, ...M, ...B, ...H]),
            eT = null,
            eS = v({}, [...F, ...q, ...G, ...W]),
            eA = Object.seal(
                h(null, {
                    tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                }),
            ),
            eR = null,
            e_ = null,
            eE = Object.seal(
                h(null, {
                    tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                }),
            ),
            eN = !0,
            eC = !0,
            ev = !1,
            eL = !0,
            eD = !1,
            eI = !0,
            ez = !1,
            e$ = !1,
            eO = !1,
            eM = !1,
            eP = !1,
            eB = !1,
            eU = !0,
            eH = !1,
            eF = !0,
            eq = !1,
            eG = {},
            eW = null,
            ej = v({}, [
                "annotation-xml",
                "audio",
                "colgroup",
                "desc",
                "foreignobject",
                "head",
                "iframe",
                "math",
                "mi",
                "mn",
                "mo",
                "ms",
                "mtext",
                "noembed",
                "noframes",
                "noscript",
                "plaintext",
                "script",
                "style",
                "svg",
                "template",
                "thead",
                "title",
                "video",
                "xmp",
            ]),
            eZ = null,
            eY = v({}, ["audio", "video", "img", "source", "image", "track"]),
            eQ = null,
            eX = v({}, [
                "alt",
                "class",
                "for",
                "id",
                "label",
                "name",
                "pattern",
                "placeholder",
                "role",
                "summary",
                "title",
                "value",
                "style",
                "xmlns",
            ]),
            eK = "http://www.w3.org/1998/Math/MathML",
            eV = "http://www.w3.org/2000/svg",
            eJ = "http://www.w3.org/1999/xhtml",
            e0 = eJ,
            e1 = !1,
            e3 = null,
            e2 = v({}, [eK, eV, eJ], y),
            e9 = v({}, ["mi", "mo", "mn", "ms", "mtext"]),
            e4 = v({}, ["annotation-xml"]),
            e6 = v({}, ["title", "style", "font", "a", "script"]),
            e5 = null,
            e7 = ["application/xhtml+xml", "text/html"],
            e8 = null,
            te = null,
            tt = r.createElement("form"),
            tn = function (e) {
                return e instanceof RegExp || e instanceof Function;
            },
            tr = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(te && te === e)) {
                    if (
                        ((e && "object" == typeof e) || (e = {}),
                        (e = L(e)),
                        (e8 =
                            "application/xhtml+xml" ===
                            (e5 = -1 === e7.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE)
                                ? y
                                : w),
                        (ew = _(e, "ALLOWED_TAGS") ? v({}, e.ALLOWED_TAGS, e8) : ey),
                        (eT = _(e, "ALLOWED_ATTR") ? v({}, e.ALLOWED_ATTR, e8) : eS),
                        (e3 = _(e, "ALLOWED_NAMESPACES") ? v({}, e.ALLOWED_NAMESPACES, y) : e2),
                        (eQ = _(e, "ADD_URI_SAFE_ATTR") ? v(L(eX), e.ADD_URI_SAFE_ATTR, e8) : eX),
                        (eZ = _(e, "ADD_DATA_URI_TAGS") ? v(L(eY), e.ADD_DATA_URI_TAGS, e8) : eY),
                        (eW = _(e, "FORBID_CONTENTS") ? v({}, e.FORBID_CONTENTS, e8) : ej),
                        (eR = _(e, "FORBID_TAGS") ? v({}, e.FORBID_TAGS, e8) : L({})),
                        (e_ = _(e, "FORBID_ATTR") ? v({}, e.FORBID_ATTR, e8) : L({})),
                        (eG = !!_(e, "USE_PROFILES") && e.USE_PROFILES),
                        (eN = !1 !== e.ALLOW_ARIA_ATTR),
                        (eC = !1 !== e.ALLOW_DATA_ATTR),
                        (ev = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                        (eL = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                        (eD = e.SAFE_FOR_TEMPLATES || !1),
                        (eI = !1 !== e.SAFE_FOR_XML),
                        (ez = e.WHOLE_DOCUMENT || !1),
                        (eM = e.RETURN_DOM || !1),
                        (eP = e.RETURN_DOM_FRAGMENT || !1),
                        (eB = e.RETURN_TRUSTED_TYPE || !1),
                        (eO = e.FORCE_BODY || !1),
                        (eU = !1 !== e.SANITIZE_DOM),
                        (eH = e.SANITIZE_NAMED_PROPS || !1),
                        (eF = !1 !== e.KEEP_CONTENT),
                        (eq = e.IN_PLACE || !1),
                        (ex = e.ALLOWED_URI_REGEXP || K),
                        (e0 = e.NAMESPACE || eJ),
                        (e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9),
                        (e4 = e.HTML_INTEGRATION_POINTS || e4),
                        (eA = e.CUSTOM_ELEMENT_HANDLING || {}),
                        e.CUSTOM_ELEMENT_HANDLING &&
                            tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                            (eA.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING &&
                            tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                            (eA.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING &&
                            "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                            (eA.allowCustomizedBuiltInElements =
                                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        eD && (eC = !1),
                        eP && (eM = !0),
                        eG &&
                            ((ew = v({}, H)),
                            (eT = h(null)),
                            !0 === eG.html && (v(ew, $), v(eT, F)),
                            !0 === eG.svg && (v(ew, O), v(eT, q), v(eT, W)),
                            !0 === eG.svgFilters && (v(ew, M), v(eT, q), v(eT, W)),
                            !0 === eG.mathMl && (v(ew, B), v(eT, G), v(eT, W))),
                        _(e, "ADD_TAGS") || (eE.tagCheck = null),
                        _(e, "ADD_ATTR") || (eE.attributeCheck = null),
                        e.ADD_TAGS &&
                            ("function" == typeof e.ADD_TAGS
                                ? (eE.tagCheck = e.ADD_TAGS)
                                : (ew === ey && (ew = L(ew)), v(ew, e.ADD_TAGS, e8))),
                        e.ADD_ATTR &&
                            ("function" == typeof e.ADD_ATTR
                                ? (eE.attributeCheck = e.ADD_ATTR)
                                : (eT === eS && (eT = L(eT)), v(eT, e.ADD_ATTR, e8))),
                        e.ADD_URI_SAFE_ATTR && v(eQ, e.ADD_URI_SAFE_ATTR, e8),
                        e.FORBID_CONTENTS && (eW === ej && (eW = L(eW)), v(eW, e.FORBID_CONTENTS, e8)),
                        e.ADD_FORBID_CONTENTS && (eW === ej && (eW = L(eW)), v(eW, e.ADD_FORBID_CONTENTS, e8)),
                        eF && (ew["#text"] = !0),
                        ez && v(ew, ["html", "head", "body"]),
                        ew.table && (v(ew, ["tbody"]), delete eR.tbody),
                        e.TRUSTED_TYPES_POLICY)
                    ) {
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                            throw N('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                            throw N('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        ei = (J = e.TRUSTED_TYPES_POLICY).createHTML("");
                    } else
                        void 0 === J && (J = en(z, s)), null !== J && "string" == typeof ei && (ei = J.createHTML(""));
                    p && p(e), (te = e);
                }
            },
            ti = v({}, [...O, ...M, ...P]),
            tl = v({}, [...B, ...U]),
            ts = function (e) {
                let t = V(e);
                (t && t.tagName) || (t = { namespaceURI: e0, tagName: "template" });
                let n = w(e.tagName),
                    r = w(t.tagName);
                return (
                    !!e3[e.namespaceURI] &&
                    (e.namespaceURI === eV
                        ? t.namespaceURI === eJ
                            ? "svg" === n
                            : t.namespaceURI === eK
                              ? "svg" === n && ("annotation-xml" === r || e9[r])
                              : !!ti[n]
                        : e.namespaceURI === eK
                          ? t.namespaceURI === eJ
                              ? "math" === n
                              : t.namespaceURI === eV
                                ? "math" === n && e4[r]
                                : !!tl[n]
                          : e.namespaceURI === eJ
                            ? (t.namespaceURI !== eV || !!e4[r]) &&
                              (t.namespaceURI !== eK || !!e9[r]) &&
                              !tl[n] &&
                              (e6[n] || !ti[n])
                            : !!("application/xhtml+xml" === e5 && e3[e.namespaceURI]))
                );
            },
            ta = function (e) {
                b(n.removed, { element: e });
                try {
                    V(e).removeChild(e);
                } catch {
                    Y(e);
                }
            },
            to = function (e, t) {
                try {
                    b(n.removed, { attribute: t.getAttributeNode(e), from: t });
                } catch {
                    b(n.removed, { attribute: null, from: t });
                }
                if ((t.removeAttribute(e), "is" === e))
                    if (eM || eP)
                        try {
                            ta(t);
                        } catch {}
                    else
                        try {
                            t.setAttribute(e, "");
                        } catch {}
            },
            tc = function (e) {
                let t = null,
                    n = null;
                if (eO) e = "<remove></remove>" + e;
                else {
                    let t = T(e, /^[\r\n\t ]+/);
                    n = t && t[0];
                }
                "application/xhtml+xml" === e5 &&
                    e0 === eJ &&
                    (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                let i = J ? J.createHTML(e) : e;
                if (e0 === eJ)
                    try {
                        t = new I().parseFromString(i, e5);
                    } catch {}
                if (!t || !t.documentElement) {
                    t = el.createDocument(e0, "template", null);
                    try {
                        t.documentElement.innerHTML = e1 ? ei : i;
                    } catch {}
                }
                let l = t.body || t.documentElement;
                return (
                    e && n && l.insertBefore(r.createTextNode(n), l.childNodes[0] || null),
                    e0 === eJ ? eo.call(t, ez ? "html" : "body")[0] : ez ? t.documentElement : l
                );
            },
            tp = function (e) {
                return es.call(
                    e.ownerDocument || e,
                    e,
                    d.SHOW_ELEMENT |
                        d.SHOW_COMMENT |
                        d.SHOW_TEXT |
                        d.SHOW_PROCESSING_INSTRUCTION |
                        d.SHOW_CDATA_SECTION,
                    null,
                );
            },
            tu = function (e) {
                return (
                    e instanceof C &&
                    ("string" != typeof e.nodeName ||
                        "string" != typeof e.textContent ||
                        "function" != typeof e.removeChild ||
                        !(e.attributes instanceof f) ||
                        "function" != typeof e.removeAttribute ||
                        "function" != typeof e.setAttribute ||
                        "string" != typeof e.namespaceURI ||
                        "function" != typeof e.insertBefore ||
                        "function" != typeof e.hasChildNodes)
                );
            },
            th = function (e) {
                return "function" == typeof c && e instanceof c;
            };
        function td(e, t, r) {
            g(e, (e) => {
                e.call(n, t, r, te);
            });
        }
        let tf = function (e) {
                let t = null;
                if ((td(ep.beforeSanitizeElements, e, null), tu(e))) return ta(e), !0;
                let r = e8(e.nodeName);
                if (
                    (td(ep.uponSanitizeElement, e, { tagName: r, allowedTags: ew }),
                    (eI &&
                        e.hasChildNodes() &&
                        !th(e.firstElementChild) &&
                        E(/<[/\w!]/g, e.innerHTML) &&
                        E(/<[/\w!]/g, e.textContent)) ||
                        7 === e.nodeType ||
                        (eI && 8 === e.nodeType && E(/<[/\w]/g, e.data)))
                )
                    return ta(e), !0;
                if (!(eE.tagCheck instanceof Function && eE.tagCheck(r)) && (!ew[r] || eR[r])) {
                    if (
                        !eR[r] &&
                        tm(r) &&
                        ((eA.tagNameCheck instanceof RegExp && E(eA.tagNameCheck, r)) ||
                            (eA.tagNameCheck instanceof Function && eA.tagNameCheck(r)))
                    )
                        return !1;
                    if (eF && !eW[r]) {
                        let t = V(e) || e.parentNode,
                            n = X(e) || e.childNodes;
                        if (n && t) {
                            let r = n.length;
                            for (let i = r - 1; i >= 0; --i) {
                                let r = Z(n[i], !0);
                                (r.__removalCount = (e.__removalCount || 0) + 1), t.insertBefore(r, Q(e));
                            }
                        }
                    }
                    return ta(e), !0;
                }
                return (e instanceof u && !ts(e)) ||
                    (("noscript" === r || "noembed" === r || "noframes" === r) &&
                        E(/<\/no(script|embed|frames)/i, e.innerHTML))
                    ? (ta(e), !0)
                    : (eD &&
                          3 === e.nodeType &&
                          ((t = e.textContent),
                          g([eu, eh, ed], (e) => {
                              t = S(t, e, " ");
                          }),
                          e.textContent !== t && (b(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
                      td(ep.afterSanitizeElements, e, null),
                      !1);
            },
            tg = function (e, t, n) {
                if (e_[t] || (eU && ("id" === t || "name" === t) && (n in r || n in tt))) return !1;
                if (
                    !(eC && !e_[t] && E(ef, t)) &&
                    !(eN && E(eg, t)) &&
                    !(eE.attributeCheck instanceof Function && eE.attributeCheck(t, e))
                ) {
                    if (!eT[t] || e_[t]) {
                        if (
                            !(
                                (tm(e) &&
                                    ((eA.tagNameCheck instanceof RegExp && E(eA.tagNameCheck, e)) ||
                                        (eA.tagNameCheck instanceof Function && eA.tagNameCheck(e))) &&
                                    ((eA.attributeNameCheck instanceof RegExp && E(eA.attributeNameCheck, t)) ||
                                        (eA.attributeNameCheck instanceof Function && eA.attributeNameCheck(t, e)))) ||
                                ("is" === t &&
                                    eA.allowCustomizedBuiltInElements &&
                                    ((eA.tagNameCheck instanceof RegExp && E(eA.tagNameCheck, n)) ||
                                        (eA.tagNameCheck instanceof Function && eA.tagNameCheck(n))))
                            )
                        )
                            return !1;
                    } else if (
                        !eQ[t] &&
                        !E(ex, S(n, ek, "")) &&
                        !(
                            ("src" === t || "xlink:href" === t || "href" === t) &&
                            "script" !== e &&
                            0 === A(n, "data:") &&
                            eZ[e]
                        ) &&
                        !(ev && !E(em, S(n, ek, ""))) &&
                        n
                    )
                        return !1;
                }
                return !0;
            },
            tm = function (e) {
                return "annotation-xml" !== e && T(e, eb);
            },
            tk = function (e) {
                td(ep.beforeSanitizeAttributes, e, null);
                let { attributes: t } = e;
                if (!t || tu(e)) return;
                let r = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: eT, forceKeepAttr: void 0 },
                    i = t.length;
                for (; i--; ) {
                    let { name: l, namespaceURI: s, value: a } = t[i],
                        o = e8(l),
                        c = "value" === l ? a : R(a);
                    if (
                        ((r.attrName = o),
                        (r.attrValue = c),
                        (r.keepAttr = !0),
                        (r.forceKeepAttr = void 0),
                        td(ep.uponSanitizeAttribute, e, r),
                        (c = r.attrValue),
                        eH && ("id" === o || "name" === o) && (to(l, e), (c = "user-content-" + c)),
                        (eI &&
                            E(
                                /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
                                c,
                            )) ||
                            ("attributename" === o && T(c, "href")))
                    ) {
                        to(l, e);
                        continue;
                    }
                    if (r.forceKeepAttr) continue;
                    if (!r.keepAttr || (!eL && E(/\/>/i, c))) {
                        to(l, e);
                        continue;
                    }
                    eD &&
                        g([eu, eh, ed], (e) => {
                            c = S(c, e, " ");
                        });
                    let p = e8(e.nodeName);
                    if (!tg(p, o, c)) {
                        to(l, e);
                        continue;
                    }
                    if (J && "object" == typeof z && "function" == typeof z.getAttributeType && !s)
                        switch (z.getAttributeType(p, o)) {
                            case "TrustedHTML":
                                c = J.createHTML(c);
                                break;
                            case "TrustedScriptURL":
                                c = J.createScriptURL(c);
                        }
                    if (c !== a)
                        try {
                            s ? e.setAttributeNS(s, l, c) : e.setAttribute(l, c), tu(e) ? ta(e) : k(n.removed);
                        } catch {
                            to(l, e);
                        }
                }
                td(ep.afterSanitizeAttributes, e, null);
            },
            tb = function e(t) {
                let n = null,
                    r = tp(t);
                for (td(ep.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
                    td(ep.uponSanitizeShadowNode, n, null), tf(n), tk(n), n.content instanceof a && e(n.content);
                td(ep.afterSanitizeShadowDOM, t, null);
            };
        return (
            (n.sanitize = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = null,
                    l = null,
                    s = null,
                    o = null;
                if (((e1 = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !th(e)))
                    if ("function" == typeof e.toString) {
                        if ("string" != typeof (e = e.toString())) throw N("dirty is not a string, aborting");
                    } else throw N("toString is not a function");
                if (!n.isSupported) return e;
                if ((e$ || tr(t), (n.removed = []), "string" == typeof e && (eq = !1), eq)) {
                    if (e.nodeName) {
                        let t = e8(e.nodeName);
                        if (!ew[t] || eR[t]) throw N("root node is forbidden and cannot be sanitized in-place");
                    }
                } else if (e instanceof c)
                    (1 === (l = (r = tc("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType &&
                        "BODY" === l.nodeName) ||
                    "HTML" === l.nodeName
                        ? (r = l)
                        : r.appendChild(l);
                else {
                    if (!eM && !eD && !ez && -1 === e.indexOf("<")) return J && eB ? J.createHTML(e) : e;
                    if (!(r = tc(e))) return eM ? null : eB ? ei : "";
                }
                r && eO && ta(r.firstChild);
                let p = tp(eq ? e : r);
                for (; (s = p.nextNode()); ) tf(s), tk(s), s.content instanceof a && tb(s.content);
                if (eq) return e;
                if (eM) {
                    if (eP) for (o = ea.call(r.ownerDocument); r.firstChild; ) o.appendChild(r.firstChild);
                    else o = r;
                    return (eT.shadowroot || eT.shadowrootmode) && (o = ec.call(i, o, !0)), o;
                }
                let u = ez ? r.outerHTML : r.innerHTML;
                return (
                    ez &&
                        ew["!doctype"] &&
                        r.ownerDocument &&
                        r.ownerDocument.doctype &&
                        r.ownerDocument.doctype.name &&
                        E(ee, r.ownerDocument.doctype.name) &&
                        (u = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + u),
                    eD &&
                        g([eu, eh, ed], (e) => {
                            u = S(u, e, " ");
                        }),
                    J && eB ? J.createHTML(u) : u
                );
            }),
            (n.setConfig = function () {
                tr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (e$ = !0);
            }),
            (n.clearConfig = function () {
                (te = null), (e$ = !1);
            }),
            (n.isValidAttribute = function (e, t, n) {
                return te || tr({}), tg(e8(e), e8(t), n);
            }),
            (n.addHook = function (e, t) {
                "function" == typeof t && b(ep[e], t);
            }),
            (n.removeHook = function (e, t) {
                if (void 0 !== t) {
                    let n = m(ep[e], t);
                    return -1 === n ? void 0 : x(ep[e], n, 1)[0];
                }
                return k(ep[e]);
            }),
            (n.removeHooks = function (e) {
                ep[e] = [];
            }),
            (n.removeAllHooks = function () {
                ep = er();
            }),
            n
        );
    })();
function el() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
    };
}
var es = el(),
    ea = { exec: () => null };
function eo(e, t = "") {
    let n = "string" == typeof e ? e : e.source,
        r = {
            replace: (e, t) => {
                let i = "string" == typeof t ? t : t.source;
                return (i = i.replace(ep.caret, "$1")), (n = n.replace(e, i)), r;
            },
            getRegex: () => new RegExp(n, t),
        };
    return r;
}
var ec = (() => {
        try {
            return !0;
        } catch {
            return !1;
        }
    })(),
    ep = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] +\S/,
        listReplaceTask: /^\[[ xX]\] +/,
        listTaskCheckbox: /\[[ xX]\]/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (e) =>
            RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
        htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
        blockquoteBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}>`),
    },
    eu = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    eh = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
    ed =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    ef = eo(ed)
        .replace(/bull/g, eh)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, "")
        .getRegex(),
    eg = eo(ed)
        .replace(/bull/g, eh)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex(),
    em = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    ek = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    eb = eo(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
        .replace("label", ek)
        .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex(),
    ex = eo(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, eh)
        .getRegex(),
    ew =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    ey = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    eT = eo(
        "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
        "i",
    )
        .replace("comment", ey)
        .replace("tag", ew)
        .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex(),
    eS = eo(em)
        .replace("hr", eu)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", ew)
        .getRegex(),
    eA = {
        blockquote: eo(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
            .replace("paragraph", eS)
            .getRegex(),
        code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
        def: eb,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: eu,
        html: eT,
        lheading: ef,
        list: ex,
        newline: /^(?:[ \t]*(?:\n|$))+/,
        paragraph: eS,
        table: ea,
        text: /^[^\n]+/,
    },
    eR = eo(
        "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
        .replace("hr", eu)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("blockquote", " {0,3}>")
        .replace("code", "(?: {4}| {0,3}	)[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", ew)
        .getRegex(),
    e_ = {
        ...eA,
        lheading: eg,
        table: eR,
        paragraph: eo(em)
            .replace("hr", eu)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", eR)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
            .replace("tag", ew)
            .getRegex(),
    },
    eE = {
        ...eA,
        html: eo(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
        )
            .replace("comment", ey)
            .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: ea,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: eo(em)
            .replace("hr", eu)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", ef)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
    },
    eN = /^( {2,}|\\)\n(?!\s*$)/,
    eC = /[\p{P}\p{S}]/u,
    ev = /[\s\p{P}\p{S}]/u,
    eL = /[^\s\p{P}\p{S}]/u,
    eD = eo(/^((?![*_])punctSpace)/, "u")
        .replace(/punctSpace/g, ev)
        .getRegex(),
    eI = /(?!~)[\p{P}\p{S}]/u,
    ez = eo(/link|precode-code|html/, "g")
        .replace(
            "link",
            /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
        )
        .replace("precode-", ec ? "(?<!`)()" : "(^^|[^`])")
        .replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/)
        .replace("html", /<(?! )[^<>]*?>/)
        .getRegex(),
    e$ = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
    eO = eo(e$, "u").replace(/punct/g, eC).getRegex(),
    eM = eo(e$, "u").replace(/punct/g, eI).getRegex(),
    eP =
        "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    eB = eo(eP, "gu")
        .replace(/notPunctSpace/g, eL)
        .replace(/punctSpace/g, ev)
        .replace(/punct/g, eC)
        .getRegex(),
    eU = eo(eP, "gu")
        .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
        .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
        .replace(/punct/g, eI)
        .getRegex(),
    eH = eo(
        "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
        "gu",
    )
        .replace(/notPunctSpace/g, eL)
        .replace(/punctSpace/g, ev)
        .replace(/punct/g, eC)
        .getRegex(),
    eF = eo(/^~~?(?:((?!~)punct)|[^\s~])/, "u")
        .replace(/punct/g, eC)
        .getRegex(),
    eq = eo(
        "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
        "gu",
    )
        .replace(/notPunctSpace/g, eL)
        .replace(/punctSpace/g, ev)
        .replace(/punct/g, eC)
        .getRegex(),
    eG = eo(/\\(punct)/, "gu")
        .replace(/punct/g, eC)
        .getRegex(),
    eW = eo(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex(),
    ej = eo(ey).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
    eZ = eo(
        "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
        .replace("comment", ej)
        .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex(),
    eY = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
    eQ = eo(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/)
        .replace("label", eY)
        .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex(),
    eX = eo(/^!?\[(label)\]\[(ref)\]/)
        .replace("label", eY)
        .replace("ref", ek)
        .getRegex(),
    eK = eo(/^!?\[(ref)\](?:\[\])?/)
        .replace("ref", ek)
        .getRegex(),
    eV = eo("reflink|nolink(?!\\()", "g").replace("reflink", eX).replace("nolink", eK).getRegex(),
    eJ = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
    e0 = {
        _backpedal: ea,
        anyPunctuation: eG,
        autolink: eW,
        blockSkip: ez,
        br: eN,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: ea,
        delLDelim: ea,
        delRDelim: ea,
        emStrongLDelim: eO,
        emStrongRDelimAst: eB,
        emStrongRDelimUnd: eH,
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        link: eQ,
        nolink: eK,
        punctuation: eD,
        reflink: eX,
        reflinkSearch: eV,
        tag: eZ,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: ea,
    },
    e1 = {
        ...e0,
        link: eo(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", eY)
            .getRegex(),
        reflink: eo(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", eY)
            .getRegex(),
    },
    e3 = {
        ...e0,
        emStrongRDelimAst: eU,
        emStrongLDelim: eM,
        delLDelim: eF,
        delRDelim: eq,
        url: eo(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
            .replace("protocol", eJ)
            .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
            .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: eo(
            /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        )
            .replace("protocol", eJ)
            .getRegex(),
    },
    e2 = {
        ...e3,
        br: eo(eN).replace("{2,}", "*").getRegex(),
        text: eo(e3.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
    },
    e9 = { normal: eA, gfm: e_, pedantic: eE },
    e4 = { normal: e0, gfm: e3, breaks: e2, pedantic: e1 },
    e6 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    e5 = (e) => e6[e];
function e7(e, t) {
    if (t) {
        if (ep.escapeTest.test(e)) return e.replace(ep.escapeReplace, e5);
    } else if (ep.escapeTestNoEncode.test(e)) return e.replace(ep.escapeReplaceNoEncode, e5);
    return e;
}
function e8(e) {
    try {
        e = encodeURI(e).replace(ep.percentDecode, "%");
    } catch {
        return null;
    }
    return e;
}
function te(e, t) {
    let n = e
            .replace(ep.findPipe, (e, t, n) => {
                let r = !1,
                    i = t;
                for (; --i >= 0 && "\\" === n[i]; ) r = !r;
                return r ? "|" : " |";
            })
            .split(ep.splitPipe),
        r = 0;
    if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t))
        if (n.length > t) n.splice(t);
        else for (; n.length < t; ) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(ep.slashPipe, "|");
    return n;
}
function tt(e, t, n) {
    let r = e.length;
    if (0 === r) return "";
    let i = 0;
    for (; i < r; ) {
        let l = e.charAt(r - i - 1);
        if (l !== t || n)
            if (l !== t && n) i++;
            else break;
        else i++;
    }
    return e.slice(0, r - i);
}
function tn(e, t, n, r, i) {
    let l = t.href,
        s = t.title || null,
        a = e[1].replace(i.other.outputLinkReplace, "$1");
    r.state.inLink = !0;
    let o = {
        type: "!" === e[0].charAt(0) ? "image" : "link",
        raw: n,
        href: l,
        title: s,
        text: a,
        tokens: r.inlineTokens(a),
    };
    return (r.state.inLink = !1), o;
}
var tr = class {
        constructor(e) {
            (0, i.t)(this, "options", void 0),
                (0, i.t)(this, "rules", void 0),
                (0, i.t)(this, "lexer", void 0),
                (this.options = e || es);
        }
        space(e) {
            let t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(e) {
            let t = this.rules.block.code.exec(e);
            if (t) {
                let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? e : tt(e, "\n"),
                };
            }
        }
        fences(e) {
            let t = this.rules.block.fences.exec(e);
            if (t) {
                let e = t[0],
                    n = (function (e, t, n) {
                        let r = e.match(n.other.indentCodeCompensation);
                        if (null === r) return t;
                        let i = r[1];
                        return t
                            .split("\n")
                            .map((e) => {
                                let t = e.match(n.other.beginningSpace);
                                if (null === t) return e;
                                let [r] = t;
                                return r.length >= i.length ? e.slice(i.length) : e;
                            })
                            .join("\n");
                    })(e, t[3] || "", this.rules);
                return {
                    type: "code",
                    raw: e,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: n,
                };
            }
        }
        heading(e) {
            let t = this.rules.block.heading.exec(e);
            if (t) {
                let e = t[2].trim();
                if (this.rules.other.endingHash.test(e)) {
                    let t = tt(e, "#");
                    (this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
                }
                return { type: "heading", raw: t[0], depth: t[1].length, text: e, tokens: this.lexer.inline(e) };
            }
        }
        hr(e) {
            let t = this.rules.block.hr.exec(e);
            if (t) return { type: "hr", raw: tt(t[0], "\n") };
        }
        blockquote(e) {
            let t = this.rules.block.blockquote.exec(e);
            if (t) {
                let e = tt(t[0], "\n").split("\n"),
                    n = "",
                    r = "",
                    i = [];
                for (; e.length > 0; ) {
                    let t = !1,
                        l = [],
                        s;
                    for (s = 0; s < e.length; s++)
                        if (this.rules.other.blockquoteStart.test(e[s])) l.push(e[s]), (t = !0);
                        else if (t) break;
                        else l.push(e[s]);
                    e = e.slice(s);
                    let a = l.join("\n"),
                        o = a
                            .replace(this.rules.other.blockquoteSetextReplace, "\n    $1")
                            .replace(this.rules.other.blockquoteSetextReplace2, "");
                    (n = n
                        ? `${n}
${a}`
                        : a),
                        (r = r
                            ? `${r}
${o}`
                            : o);
                    let c = this.lexer.state.top;
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(o, i, !0),
                        (this.lexer.state.top = c),
                        0 === e.length)
                    )
                        break;
                    let p = i.at(-1);
                    if (p?.type === "code") break;
                    if (p?.type === "blockquote") {
                        let t = p.raw + "\n" + e.join("\n"),
                            l = this.blockquote(t);
                        (i[i.length - 1] = l),
                            (n = n.substring(0, n.length - p.raw.length) + l.raw),
                            (r = r.substring(0, r.length - p.text.length) + l.text);
                        break;
                    }
                    if (p?.type === "list") {
                        let t = p.raw + "\n" + e.join("\n"),
                            l = this.list(t);
                        (i[i.length - 1] = l),
                            (n = n.substring(0, n.length - p.raw.length) + l.raw),
                            (r = r.substring(0, r.length - p.raw.length) + l.raw),
                            (e = t.substring(i.at(-1).raw.length).split("\n"));
                        continue;
                    }
                }
                return { type: "blockquote", raw: n, tokens: i, text: r };
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let n = t[1].trim(),
                    r = n.length > 1,
                    i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: !1, items: [] };
                (n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`), this.options.pedantic && (n = r ? n : "[*+-]");
                let l = this.rules.other.listItemRegex(n),
                    s = !1;
                for (; e; ) {
                    let n = !1,
                        r = "",
                        a = "";
                    if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
                    (r = t[0]), (e = e.substring(r.length));
                    let o = (function (e, t = 0) {
                            let n = t,
                                r = "";
                            for (let t of e)
                                if ("	" === t) {
                                    let e = 4 - (n % 4);
                                    (r += " ".repeat(e)), (n += e);
                                } else (r += t), n++;
                            return r;
                        })(t[2].split("\n", 1)[0], t[1].length),
                        c = e.split("\n", 1)[0],
                        p = !o.trim(),
                        u = 0;
                    if (
                        (this.options.pedantic
                            ? ((u = 2), (a = o.trimStart()))
                            : p
                              ? (u = t[1].length + 1)
                              : ((u = (u = o.search(this.rules.other.nonSpaceChar)) > 4 ? 1 : u),
                                (a = o.slice(u)),
                                (u += t[1].length)),
                        p &&
                            this.rules.other.blankLine.test(c) &&
                            ((r += c + "\n"), (e = e.substring(c.length + 1)), (n = !0)),
                        !n)
                    ) {
                        let t = this.rules.other.nextBulletRegex(u),
                            n = this.rules.other.hrRegex(u),
                            i = this.rules.other.fencesBeginRegex(u),
                            l = this.rules.other.headingBeginRegex(u),
                            s = this.rules.other.htmlBeginRegex(u),
                            h = this.rules.other.blockquoteBeginRegex(u);
                        for (; e; ) {
                            let d = e.split("\n", 1)[0],
                                f;
                            if (
                                ((c = d),
                                (f = this.options.pedantic
                                    ? (c = c.replace(this.rules.other.listReplaceNesting, "  "))
                                    : c.replace(this.rules.other.tabCharGlobal, "    ")),
                                i.test(c) || l.test(c) || s.test(c) || h.test(c) || t.test(c) || n.test(c))
                            )
                                break;
                            if (f.search(this.rules.other.nonSpaceChar) >= u || !c.trim()) a += "\n" + f.slice(u);
                            else {
                                if (
                                    p ||
                                    o
                                        .replace(this.rules.other.tabCharGlobal, "    ")
                                        .search(this.rules.other.nonSpaceChar) >= 4 ||
                                    i.test(o) ||
                                    l.test(o) ||
                                    n.test(o)
                                )
                                    break;
                                a += "\n" + c;
                            }
                            (p = !c.trim()), (r += d + "\n"), (e = e.substring(d.length + 1)), (o = f.slice(u));
                        }
                    }
                    i.loose || (s ? (i.loose = !0) : this.rules.other.doubleBlankLine.test(r) && (s = !0)),
                        i.items.push({
                            type: "list_item",
                            raw: r,
                            task: !!this.options.gfm && this.rules.other.listIsTask.test(a),
                            loose: !1,
                            text: a,
                            tokens: [],
                        }),
                        (i.raw += r);
                }
                let a = i.items.at(-1);
                if (!a) return;
                for (let e of ((a.raw = a.raw.trimEnd()),
                (a.text = a.text.trimEnd()),
                (i.raw = i.raw.trimEnd()),
                i.items)) {
                    if (((this.lexer.state.top = !1), (e.tokens = this.lexer.blockTokens(e.text, [])), e.task)) {
                        if (
                            ((e.text = e.text.replace(this.rules.other.listReplaceTask, "")),
                            e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph")
                        ) {
                            (e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, "")),
                                (e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, ""));
                            for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
                                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
                                    this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(
                                        this.rules.other.listReplaceTask,
                                        "",
                                    );
                                    break;
                                }
                        }
                        let t = this.rules.other.listTaskCheckbox.exec(e.raw);
                        if (t) {
                            let n = { type: "checkbox", raw: t[0] + " ", checked: "[ ]" !== t[0] };
                            (e.checked = n.checked),
                                i.loose
                                    ? e.tokens[0] &&
                                      ["paragraph", "text"].includes(e.tokens[0].type) &&
                                      "tokens" in e.tokens[0] &&
                                      e.tokens[0].tokens
                                        ? ((e.tokens[0].raw = n.raw + e.tokens[0].raw),
                                          (e.tokens[0].text = n.raw + e.tokens[0].text),
                                          e.tokens[0].tokens.unshift(n))
                                        : e.tokens.unshift({ type: "paragraph", raw: n.raw, text: n.raw, tokens: [n] })
                                    : e.tokens.unshift(n);
                        }
                    }
                    if (!i.loose) {
                        let t = e.tokens.filter((e) => "space" === e.type);
                        i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
                    }
                }
                if (i.loose)
                    for (let e of i.items)
                        for (let t of ((e.loose = !0), e.tokens)) "text" === t.type && (t.type = "paragraph");
                return i;
            }
        }
        html(e) {
            let t = this.rules.block.html.exec(e);
            if (t)
                return {
                    type: "html",
                    block: !0,
                    raw: t[0],
                    pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                    text: t[0],
                };
        }
        def(e) {
            let t = this.rules.block.def.exec(e);
            if (t) {
                let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                    n = t[2]
                        ? t[2]
                              .replace(this.rules.other.hrefBrackets, "$1")
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : "",
                    r = t[3]
                        ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1")
                        : t[3];
                return { type: "def", tag: e, raw: t[0], href: n, title: r };
            }
        }
        table(e) {
            let t = this.rules.block.table.exec(e);
            if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
            let n = te(t[1]),
                r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [],
                l = { type: "table", raw: t[0], header: [], align: [], rows: [] };
            if (n.length === r.length) {
                for (let e of r)
                    this.rules.other.tableAlignRight.test(e)
                        ? l.align.push("right")
                        : this.rules.other.tableAlignCenter.test(e)
                          ? l.align.push("center")
                          : this.rules.other.tableAlignLeft.test(e)
                            ? l.align.push("left")
                            : l.align.push(null);
                for (let e = 0; e < n.length; e++)
                    l.header.push({ text: n[e], tokens: this.lexer.inline(n[e]), header: !0, align: l.align[e] });
                for (let e of i)
                    l.rows.push(
                        te(e, l.header.length).map((e, t) => ({
                            text: e,
                            tokens: this.lexer.inline(e),
                            header: !1,
                            align: l.align[t],
                        })),
                    );
                return l;
            }
        }
        lheading(e) {
            let t = this.rules.block.lheading.exec(e);
            if (t) {
                let e = t[1].trim();
                return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: e,
                    tokens: this.lexer.inline(e),
                };
            }
        }
        paragraph(e) {
            let t = this.rules.block.paragraph.exec(e);
            if (t) {
                let e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                return { type: "paragraph", raw: t[0], text: e, tokens: this.lexer.inline(e) };
            }
        }
        text(e) {
            let t = this.rules.block.text.exec(e);
            if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
        }
        escape(e) {
            let t = this.rules.inline.escape.exec(e);
            if (t) return { type: "escape", raw: t[0], text: t[1] };
        }
        tag(e) {
            let t = this.rules.inline.tag.exec(e);
            if (t)
                return (
                    !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          this.rules.other.endATag.test(t[0]) &&
                          (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          this.rules.other.endPreScriptTag.test(t[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                    {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0],
                    }
                );
        }
        link(e) {
            let t = this.rules.inline.link.exec(e);
            if (t) {
                let e = t[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
                    if (!this.rules.other.endAngleBracket.test(e)) return;
                    let t = tt(e.slice(0, -1), "\\");
                    if ((e.length - t.length) % 2 == 0) return;
                } else {
                    let e = (function (e) {
                        if (-1 === e.indexOf(")")) return -1;
                        let t = 0;
                        for (let n = 0; n < e.length; n++)
                            if ("\\" === e[n]) n++;
                            else if ("(" === e[n]) t++;
                            else if (")" === e[n] && --t < 0) return n;
                        return t > 0 ? -2 : -1;
                    })(t[2]);
                    if (-2 === e) return;
                    if (e > -1) {
                        let n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                        (t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = "");
                    }
                }
                let n = t[2],
                    r = "";
                if (this.options.pedantic) {
                    let e = this.rules.other.pedanticHrefTitle.exec(n);
                    e && ((n = e[1]), (r = e[3]));
                } else r = t[3] ? t[3].slice(1, -1) : "";
                return (
                    (n = n.trim()),
                    this.rules.other.startAngleBracket.test(n) &&
                        (n =
                            this.options.pedantic && !this.rules.other.endAngleBracket.test(e)
                                ? n.slice(1)
                                : n.slice(1, -1)),
                    tn(
                        t,
                        {
                            href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
                            title: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                        },
                        t[0],
                        this.lexer,
                        this.rules,
                    )
                );
            }
        }
        reflink(e, t) {
            let n;
            if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
                if (!e) {
                    let e = n[0].charAt(0);
                    return { type: "text", raw: e, text: e };
                }
                return tn(n, e, n[0], this.lexer, this.rules);
            }
        }
        emStrong(e, t, n = "") {
            let r = this.rules.inline.emStrongLDelim.exec(e);
            if (
                !(
                    !r ||
                    (!r[1] && !r[2] && !r[3] && !r[4]) ||
                    (r[4] && n.match(this.rules.other.unicodeAlphaNumeric))
                ) &&
                (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))
            ) {
                let n = [...r[0]].length - 1,
                    i,
                    l,
                    s = n,
                    a = 0,
                    o = "*" === r[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (o.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = o.exec(t)); ) {
                    if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
                    if (((l = [...i].length), r[3] || r[4])) {
                        s += l;
                        continue;
                    }
                    if ((r[5] || r[6]) && n % 3 && !((n + l) % 3)) {
                        a += l;
                        continue;
                    }
                    if ((s -= l) > 0) continue;
                    l = Math.min(l, l + s + a);
                    let t = [...r[0]][0].length,
                        o = e.slice(0, n + r.index + t + l);
                    if (Math.min(n, l) % 2) {
                        let e = o.slice(1, -1);
                        return { type: "em", raw: o, text: e, tokens: this.lexer.inlineTokens(e) };
                    }
                    let c = o.slice(2, -2);
                    return { type: "strong", raw: o, text: c, tokens: this.lexer.inlineTokens(c) };
                }
            }
        }
        codespan(e) {
            let t = this.rules.inline.code.exec(e);
            if (t) {
                let e = t[2].replace(this.rules.other.newLineCharGlobal, " "),
                    n = this.rules.other.nonSpaceChar.test(e),
                    r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
                return n && r && (e = e.substring(1, e.length - 1)), { type: "codespan", raw: t[0], text: e };
            }
        }
        br(e) {
            let t = this.rules.inline.br.exec(e);
            if (t) return { type: "br", raw: t[0] };
        }
        del(e, t, n = "") {
            let r = this.rules.inline.delLDelim.exec(e);
            if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
                let n = [...r[0]].length - 1,
                    i,
                    l,
                    s = n,
                    a = this.rules.inline.delRDelim;
                for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = a.exec(t)); ) {
                    if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]) || (l = [...i].length) !== n) continue;
                    if (r[3] || r[4]) {
                        s += l;
                        continue;
                    }
                    if ((s -= l) > 0) continue;
                    l = Math.min(l, l + s);
                    let t = [...r[0]][0].length,
                        a = e.slice(0, n + r.index + t + l),
                        o = a.slice(n, -n);
                    return { type: "del", raw: a, text: o, tokens: this.lexer.inlineTokens(o) };
                }
            }
        }
        autolink(e) {
            let t = this.rules.inline.autolink.exec(e);
            if (t) {
                let e, n;
                return (
                    (n = "@" === t[2] ? "mailto:" + (e = t[1]) : (e = t[1])),
                    { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] }
                );
            }
        }
        url(e) {
            let t;
            if ((t = this.rules.inline.url.exec(e))) {
                let e, n;
                if ("@" === t[2]) n = "mailto:" + (e = t[0]);
                else {
                    let r;
                    do (r = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
                    while (r !== t[0]);
                    (e = t[0]), (n = "www." === t[1] ? "http://" + t[0] : t[0]);
                }
                return { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] };
            }
        }
        inlineText(e) {
            let t = this.rules.inline.text.exec(e);
            if (t) {
                let e = this.lexer.state.inRawBlock;
                return { type: "text", raw: t[0], text: t[0], escaped: e };
            }
        }
    },
    ti = class e {
        constructor(e) {
            (0, i.t)(this, "tokens", void 0),
                (0, i.t)(this, "options", void 0),
                (0, i.t)(this, "state", void 0),
                (0, i.t)(this, "inlineQueue", void 0),
                (0, i.t)(this, "tokenizer", void 0),
                (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || es),
                (this.options.tokenizer = this.options.tokenizer || new tr()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
            let t = { other: ep, block: e9.normal, inline: e4.normal };
            this.options.pedantic
                ? ((t.block = e9.pedantic), (t.inline = e4.pedantic))
                : this.options.gfm &&
                  ((t.block = e9.gfm), this.options.breaks ? (t.inline = e4.breaks) : (t.inline = e4.gfm)),
                (this.tokenizer.rules = t);
        }
        static get rules() {
            return { block: e9, inline: e4 };
        }
        static lex(t, n) {
            return new e(n).lex(t);
        }
        static lexInline(t, n) {
            return new e(n).inlineTokens(t);
        }
        lex(e) {
            (e = e.replace(ep.carriageReturn, "\n")), this.blockTokens(e, this.tokens);
            for (let e = 0; e < this.inlineQueue.length; e++) {
                let t = this.inlineQueue[e];
                this.inlineTokens(t.src, t.tokens);
            }
            return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(e, t = [], n = !1) {
            for (
                this.tokenizer.lexer = this,
                    this.options.pedantic && (e = e.replace(ep.tabCharGlobal, "    ").replace(ep.spaceLine, ""));
                e;
            ) {
                let r;
                if (
                    this.options.extensions?.block?.some(
                        (n) =>
                            !!(r = n.call({ lexer: this }, e, t)) && ((e = e.substring(r.raw.length)), t.push(r), !0),
                    )
                )
                    continue;
                if ((r = this.tokenizer.space(e))) {
                    e = e.substring(r.raw.length);
                    let n = t.at(-1);
                    1 === r.raw.length && void 0 !== n ? (n.raw += "\n") : t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.code(e))) {
                    e = e.substring(r.raw.length);
                    let n = t.at(-1);
                    n?.type === "paragraph" || n?.type === "text"
                        ? ((n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw),
                          (n.text += "\n" + r.text),
                          (this.inlineQueue.at(-1).src = n.text))
                        : t.push(r);
                    continue;
                }
                if (
                    (r = this.tokenizer.fences(e)) ||
                    (r = this.tokenizer.heading(e)) ||
                    (r = this.tokenizer.hr(e)) ||
                    (r = this.tokenizer.blockquote(e)) ||
                    (r = this.tokenizer.list(e)) ||
                    (r = this.tokenizer.html(e))
                ) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                if ((r = this.tokenizer.def(e))) {
                    e = e.substring(r.raw.length);
                    let n = t.at(-1);
                    n?.type === "paragraph" || n?.type === "text"
                        ? ((n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw),
                          (n.text += "\n" + r.raw),
                          (this.inlineQueue.at(-1).src = n.text))
                        : this.tokens.links[r.tag] ||
                          ((this.tokens.links[r.tag] = { href: r.href, title: r.title }), t.push(r));
                    continue;
                }
                if ((r = this.tokenizer.table(e)) || (r = this.tokenizer.lheading(e))) {
                    (e = e.substring(r.raw.length)), t.push(r);
                    continue;
                }
                let i = e;
                if (this.options.extensions?.startBlock) {
                    let t = 1 / 0,
                        n = e.slice(1),
                        r;
                    this.options.extensions.startBlock.forEach((e) => {
                        "number" == typeof (r = e.call({ lexer: this }, n)) && r >= 0 && (t = Math.min(t, r));
                    }),
                        t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
                }
                if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                    let l = t.at(-1);
                    n && l?.type === "paragraph"
                        ? ((l.raw += (l.raw.endsWith("\n") ? "" : "\n") + r.raw),
                          (l.text += "\n" + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = l.text))
                        : t.push(r),
                        (n = i.length !== e.length),
                        (e = e.substring(r.raw.length));
                    continue;
                }
                if ((r = this.tokenizer.text(e))) {
                    e = e.substring(r.raw.length);
                    let n = t.at(-1);
                    n?.type === "text"
                        ? ((n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw),
                          (n.text += "\n" + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = n.text))
                        : t.push(r);
                    continue;
                }
                if (e) {
                    let t = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw Error(t);
                }
            }
            return (this.state.top = !0), t;
        }
        inline(e, t = []) {
            return this.inlineQueue.push({ src: e, tokens: t }), t;
        }
        inlineTokens(e, t = []) {
            let n;
            this.tokenizer.lexer = this;
            let r = e,
                i = null;
            if (this.tokens.links) {
                let e = Object.keys(this.tokens.links);
                if (e.length > 0)
                    for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)); )
                        e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) &&
                            (r =
                                r.slice(0, i.index) +
                                "[" +
                                "a".repeat(i[0].length - 2) +
                                "]" +
                                r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)); )
                r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(r)); )
                (n = i[2] ? i[2].length : 0),
                    (r =
                        r.slice(0, i.index + n) +
                        "[" +
                        "a".repeat(i[0].length - n - 2) +
                        "]" +
                        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex));
            r = this.options.hooks?.emStrongMask?.call({ lexer: this }, r) ?? r;
            let l = !1,
                s = "";
            for (; e; ) {
                let n;
                if (
                    (l || (s = ""),
                    (l = !1),
                    this.options.extensions?.inline?.some(
                        (r) =>
                            !!(n = r.call({ lexer: this }, e, t)) && ((e = e.substring(n.raw.length)), t.push(n), !0),
                    ))
                )
                    continue;
                if ((n = this.tokenizer.escape(e)) || (n = this.tokenizer.tag(e)) || (n = this.tokenizer.link(e))) {
                    (e = e.substring(n.raw.length)), t.push(n);
                    continue;
                }
                if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
                    e = e.substring(n.raw.length);
                    let r = t.at(-1);
                    "text" === n.type && r?.type === "text" ? ((r.raw += n.raw), (r.text += n.text)) : t.push(n);
                    continue;
                }
                if (
                    (n = this.tokenizer.emStrong(e, r, s)) ||
                    (n = this.tokenizer.codespan(e)) ||
                    (n = this.tokenizer.br(e)) ||
                    (n = this.tokenizer.del(e, r, s)) ||
                    (n = this.tokenizer.autolink(e)) ||
                    (!this.state.inLink && (n = this.tokenizer.url(e)))
                ) {
                    (e = e.substring(n.raw.length)), t.push(n);
                    continue;
                }
                let i = e;
                if (this.options.extensions?.startInline) {
                    let t = 1 / 0,
                        n = e.slice(1),
                        r;
                    this.options.extensions.startInline.forEach((e) => {
                        "number" == typeof (r = e.call({ lexer: this }, n)) && r >= 0 && (t = Math.min(t, r));
                    }),
                        t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
                }
                if ((n = this.tokenizer.inlineText(i))) {
                    (e = e.substring(n.raw.length)), "_" !== n.raw.slice(-1) && (s = n.raw.slice(-1)), (l = !0);
                    let r = t.at(-1);
                    r?.type === "text" ? ((r.raw += n.raw), (r.text += n.text)) : t.push(n);
                    continue;
                }
                if (e) {
                    let t = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw Error(t);
                }
            }
            return t;
        }
    },
    tl = class {
        constructor(e) {
            (0, i.t)(this, "options", void 0), (0, i.t)(this, "parser", void 0), (this.options = e || es);
        }
        space(e) {
            return "";
        }
        code({ text: e, lang: t, escaped: n }) {
            let r = (t || "").match(ep.notSpaceStart)?.[0],
                i = e.replace(ep.endingNewline, "") + "\n";
            return r
                ? '<pre><code class="language-' + e7(r) + '">' + (n ? i : e7(i, !0)) + "</code></pre>\n"
                : "<pre><code>" + (n ? i : e7(i, !0)) + "</code></pre>\n";
        }
        blockquote({ tokens: e }) {
            return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
        }
        html({ text: e }) {
            return e;
        }
        def(e) {
            return "";
        }
        heading({ tokens: e, depth: t }) {
            return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
        }
        hr(e) {
            return "<hr>\n";
        }
        list(e) {
            let t = e.ordered,
                n = e.start,
                r = "";
            for (let t = 0; t < e.items.length; t++) {
                let n = e.items[t];
                r += this.listitem(n);
            }
            let i = t ? "ol" : "ul";
            return "<" + i + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + r + "</" + i + ">\n";
        }
        listitem(e) {
            return `<li>${this.parser.parse(e.tokens)}</li>
`;
        }
        checkbox({ checked: e }) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
        }
        paragraph({ tokens: e }) {
            return `<p>${this.parser.parseInline(e)}</p>
`;
        }
        table(e) {
            let t = "",
                n = "";
            for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
            t += this.tablerow({ text: n });
            let r = "";
            for (let t = 0; t < e.rows.length; t++) {
                let i = e.rows[t];
                n = "";
                for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
                r += this.tablerow({ text: n });
            }
            return "<table>\n<thead>\n" + t + "</thead>\n" + (r &&= `<tbody>${r}</tbody>`) + "</table>\n";
        }
        tablerow({ text: e }) {
            return `<tr>
${e}</tr>
`;
        }
        tablecell(e) {
            let t = this.parser.parseInline(e.tokens),
                n = e.header ? "th" : "td";
            return (
                (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
                t +
                `</${n}>
`
            );
        }
        strong({ tokens: e }) {
            return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({ tokens: e }) {
            return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({ text: e }) {
            return `<code>${e7(e, !0)}</code>`;
        }
        br(e) {
            return "<br>";
        }
        del({ tokens: e }) {
            return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({ href: e, title: t, tokens: n }) {
            let r = this.parser.parseInline(n),
                i = e8(e);
            if (null === i) return r;
            let l = '<a href="' + (e = i) + '"';
            return t && (l += ' title="' + e7(t) + '"'), (l += ">" + r + "</a>");
        }
        image({ href: e, title: t, text: n, tokens: r }) {
            r && (n = this.parser.parseInline(r, this.parser.textRenderer));
            let i = e8(e);
            if (null === i) return e7(n);
            e = i;
            let l = `<img src="${e}" alt="${e7(n)}"`;
            return t && (l += ` title="${e7(t)}"`), (l += ">");
        }
        text(e) {
            return "tokens" in e && e.tokens
                ? this.parser.parseInline(e.tokens)
                : "escaped" in e && e.escaped
                  ? e.text
                  : e7(e.text);
        }
    },
    ts = class {
        strong({ text: e }) {
            return e;
        }
        em({ text: e }) {
            return e;
        }
        codespan({ text: e }) {
            return e;
        }
        del({ text: e }) {
            return e;
        }
        html({ text: e }) {
            return e;
        }
        text({ text: e }) {
            return e;
        }
        link({ text: e }) {
            return "" + e;
        }
        image({ text: e }) {
            return "" + e;
        }
        br() {
            return "";
        }
        checkbox({ raw: e }) {
            return e;
        }
    },
    ta = class e {
        constructor(e) {
            (0, i.t)(this, "options", void 0),
                (0, i.t)(this, "renderer", void 0),
                (0, i.t)(this, "textRenderer", void 0),
                (this.options = e || es),
                (this.options.renderer = this.options.renderer || new tl()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new ts());
        }
        static parse(t, n) {
            return new e(n).parse(t);
        }
        static parseInline(t, n) {
            return new e(n).parseInline(t);
        }
        parse(e) {
            this.renderer.parser = this;
            let t = "";
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (this.options.extensions?.renderers?.[r.type]) {
                    let e = this.options.extensions.renderers[r.type].call({ parser: this }, r);
                    if (
                        !1 !== e ||
                        ![
                            "space",
                            "hr",
                            "heading",
                            "code",
                            "table",
                            "blockquote",
                            "list",
                            "html",
                            "def",
                            "paragraph",
                            "text",
                        ].includes(r.type)
                    ) {
                        t += e || "";
                        continue;
                    }
                }
                switch (r.type) {
                    case "space":
                        t += this.renderer.space(r);
                        break;
                    case "hr":
                        t += this.renderer.hr(r);
                        break;
                    case "heading":
                        t += this.renderer.heading(r);
                        break;
                    case "code":
                        t += this.renderer.code(r);
                        break;
                    case "table":
                        t += this.renderer.table(r);
                        break;
                    case "blockquote":
                        t += this.renderer.blockquote(r);
                        break;
                    case "list":
                        t += this.renderer.list(r);
                        break;
                    case "checkbox":
                        t += this.renderer.checkbox(r);
                        break;
                    case "html":
                        t += this.renderer.html(r);
                        break;
                    case "def":
                        t += this.renderer.def(r);
                        break;
                    case "paragraph":
                        t += this.renderer.paragraph(r);
                        break;
                    case "text":
                        t += this.renderer.text(r);
                        break;
                    default: {
                        let e = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return console.error(e), "";
                        throw Error(e);
                    }
                }
            }
            return t;
        }
        parseInline(e, t = this.renderer) {
            this.renderer.parser = this;
            let n = "";
            for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (this.options.extensions?.renderers?.[i.type]) {
                    let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
                    if (
                        !1 !== e ||
                        !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(
                            i.type,
                        )
                    ) {
                        n += e || "";
                        continue;
                    }
                }
                switch (i.type) {
                    case "escape":
                    case "text":
                        n += t.text(i);
                        break;
                    case "html":
                        n += t.html(i);
                        break;
                    case "link":
                        n += t.link(i);
                        break;
                    case "image":
                        n += t.image(i);
                        break;
                    case "checkbox":
                        n += t.checkbox(i);
                        break;
                    case "strong":
                        n += t.strong(i);
                        break;
                    case "em":
                        n += t.em(i);
                        break;
                    case "codespan":
                        n += t.codespan(i);
                        break;
                    case "br":
                        n += t.br(i);
                        break;
                    case "del":
                        n += t.del(i);
                        break;
                    default: {
                        let e = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return console.error(e), "";
                        throw Error(e);
                    }
                }
            }
            return n;
        }
    },
    to =
        ((z = class {
            constructor(e) {
                (0, i.t)(this, "options", void 0), (0, i.t)(this, "block", void 0), (this.options = e || es);
            }
            preprocess(e) {
                return e;
            }
            postprocess(e) {
                return e;
            }
            processAllTokens(e) {
                return e;
            }
            emStrongMask(e) {
                return e;
            }
            provideLexer() {
                return this.block ? ti.lex : ti.lexInline;
            }
            provideParser() {
                return this.block ? ta.parse : ta.parseInline;
            }
        }),
        (0, i.t)(z, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])),
        (0, i.t)(z, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])),
        z),
    tc = new (class {
        constructor(...e) {
            (0, i.t)(this, "defaults", el()),
                (0, i.t)(this, "options", this.setOptions),
                (0, i.t)(this, "parse", this.parseMarkdown(!0)),
                (0, i.t)(this, "parseInline", this.parseMarkdown(!1)),
                (0, i.t)(this, "Parser", ta),
                (0, i.t)(this, "Renderer", tl),
                (0, i.t)(this, "TextRenderer", ts),
                (0, i.t)(this, "Lexer", ti),
                (0, i.t)(this, "Tokenizer", tr),
                (0, i.t)(this, "Hooks", to),
                this.use(...e);
        }
        walkTokens(e, t) {
            let n = [];
            for (let r of e)
                switch (((n = n.concat(t.call(this, r))), r.type)) {
                    case "table":
                        for (let e of r.header) n = n.concat(this.walkTokens(e.tokens, t));
                        for (let e of r.rows) for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
                        break;
                    case "list":
                        n = n.concat(this.walkTokens(r.items, t));
                        break;
                    default: {
                        let e = r;
                        this.defaults.extensions?.childTokens?.[e.type]
                            ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
                                  let i = e[r].flat(1 / 0);
                                  n = n.concat(this.walkTokens(i, t));
                              })
                            : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
                    }
                }
            return n;
        }
        use(...e) {
            let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
            return (
                e.forEach((e) => {
                    let n = { ...e };
                    if (
                        ((n.async = this.defaults.async || n.async || !1),
                        e.extensions &&
                            (e.extensions.forEach((e) => {
                                if (!e.name) throw Error("extension name required");
                                if ("renderer" in e) {
                                    let n = t.renderers[e.name];
                                    n
                                        ? (t.renderers[e.name] = function (...t) {
                                              let r = e.renderer.apply(this, t);
                                              return !1 === r && (r = n.apply(this, t)), r;
                                          })
                                        : (t.renderers[e.name] = e.renderer);
                                }
                                if ("tokenizer" in e) {
                                    if (!e.level || ("block" !== e.level && "inline" !== e.level))
                                        throw Error("extension level must be 'block' or 'inline'");
                                    let n = t[e.level];
                                    n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                                        e.start &&
                                            ("block" === e.level
                                                ? t.startBlock
                                                    ? t.startBlock.push(e.start)
                                                    : (t.startBlock = [e.start])
                                                : "inline" === e.level &&
                                                  (t.startInline
                                                      ? t.startInline.push(e.start)
                                                      : (t.startInline = [e.start])));
                                }
                                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
                            }),
                            (n.extensions = t)),
                        e.renderer)
                    ) {
                        let t = this.defaults.renderer || new tl(this.defaults);
                        for (let n in e.renderer) {
                            if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                            if (["options", "parser"].includes(n)) continue;
                            let r = e.renderer[n],
                                i = t[n];
                            t[n] = (...e) => {
                                let n = r.apply(t, e);
                                return !1 === n && (n = i.apply(t, e)), n || "";
                            };
                        }
                        n.renderer = t;
                    }
                    if (e.tokenizer) {
                        let t = this.defaults.tokenizer || new tr(this.defaults);
                        for (let n in e.tokenizer) {
                            if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                            if (["options", "rules", "lexer"].includes(n)) continue;
                            let r = e.tokenizer[n],
                                i = t[n];
                            t[n] = (...e) => {
                                let n = r.apply(t, e);
                                return !1 === n && (n = i.apply(t, e)), n;
                            };
                        }
                        n.tokenizer = t;
                    }
                    if (e.hooks) {
                        let t = this.defaults.hooks || new to();
                        for (let n in e.hooks) {
                            if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                            if (["options", "block"].includes(n)) continue;
                            let r = e.hooks[n],
                                i = t[n];
                            to.passThroughHooks.has(n)
                                ? (t[n] = (e) => {
                                      if (this.defaults.async && to.passThroughHooksRespectAsync.has(n))
                                          return (async () => {
                                              let n = await r.call(t, e);
                                              return i.call(t, n);
                                          })();
                                      let l = r.call(t, e);
                                      return i.call(t, l);
                                  })
                                : (t[n] = (...e) => {
                                      if (this.defaults.async)
                                          return (async () => {
                                              let n = await r.apply(t, e);
                                              return !1 === n && (n = await i.apply(t, e)), n;
                                          })();
                                      let n = r.apply(t, e);
                                      return !1 === n && (n = i.apply(t, e)), n;
                                  });
                        }
                        n.hooks = t;
                    }
                    if (e.walkTokens) {
                        let t = this.defaults.walkTokens,
                            r = e.walkTokens;
                        n.walkTokens = function (e) {
                            let n = [];
                            return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
                        };
                    }
                    this.defaults = { ...this.defaults, ...n };
                }),
                this
            );
        }
        setOptions(e) {
            return (this.defaults = { ...this.defaults, ...e }), this;
        }
        lexer(e, t) {
            return ti.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
            return ta.parse(e, t ?? this.defaults);
        }
        parseMarkdown(e) {
            return (t, n) => {
                let r = { ...n },
                    i = { ...this.defaults, ...r },
                    l = this.onError(!!i.silent, !!i.async);
                if (!0 === this.defaults.async && !1 === r.async)
                    return l(
                        Error(
                            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                        ),
                    );
                if (typeof t > "u" || null === t) return l(Error("marked(): input parameter is undefined or null"));
                if ("string" != typeof t)
                    return l(
                        Error(
                            "marked(): input parameter is of type " +
                                Object.prototype.toString.call(t) +
                                ", string expected",
                        ),
                    );
                if ((i.hooks && ((i.hooks.options = i), (i.hooks.block = e)), i.async))
                    return (async () => {
                        let n = i.hooks ? await i.hooks.preprocess(t) : t,
                            r = await (i.hooks ? await i.hooks.provideLexer() : e ? ti.lex : ti.lexInline)(n, i),
                            l = i.hooks ? await i.hooks.processAllTokens(r) : r;
                        i.walkTokens && (await Promise.all(this.walkTokens(l, i.walkTokens)));
                        let s = await (i.hooks ? await i.hooks.provideParser() : e ? ta.parse : ta.parseInline)(l, i);
                        return i.hooks ? await i.hooks.postprocess(s) : s;
                    })().catch(l);
                try {
                    i.hooks && (t = i.hooks.preprocess(t));
                    let n = (i.hooks ? i.hooks.provideLexer() : e ? ti.lex : ti.lexInline)(t, i);
                    i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
                    let r = (i.hooks ? i.hooks.provideParser() : e ? ta.parse : ta.parseInline)(n, i);
                    return i.hooks && (r = i.hooks.postprocess(r)), r;
                } catch (e) {
                    return l(e);
                }
            };
        }
        onError(e, t) {
            return (n) => {
                if (((n.message += "\nPlease report this to https://github.com/markedjs/marked."), e)) {
                    let e = "<p>An error occurred:</p><pre>" + e7(n.message + "", !0) + "</pre>";
                    return t ? Promise.resolve(e) : e;
                }
                if (t) return Promise.reject(n);
                throw n;
            };
        }
    })();
function tp(e, t) {
    return tc.parse(e, t);
}
function tu({ content: e, class: t, disallowedTags: n = [] }) {
    return e
        ? (0, r.v)("div", {
              class: t,
              children: (0, r.v)(r.t, {
                  markup: (function (e, t) {
                      let n = e.replace(/([^\s>])(<a\b)/gu, "$1\xa0$2").replace(/(<\/a>)([\p{L}\p{N}])/gu, "$1\xa0$2"),
                          r = tp.parse(n);
                      var i = ei.sanitize(r, { FORBID_TAGS: t });
                      let l = new DOMParser().parseFromString(i, "text/html");
                      for (let e of l.querySelectorAll("a"))
                          e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer");
                      return l.body.innerHTML;
                  })(e, n),
                  type: "html",
                  trim: !1,
              }),
          })
        : null;
}
(tp.options = tp.setOptions =
    function (e) {
        return tc.setOptions(e), (tp.defaults = tc.defaults), (es = tp.defaults), tp;
    }),
    (tp.getDefaults = el),
    (tp.defaults = es),
    (tp.use = function (...e) {
        return tc.use(...e), (tp.defaults = tc.defaults), (es = tp.defaults), tp;
    }),
    (tp.walkTokens = function (e, t) {
        return tc.walkTokens(e, t);
    }),
    (tp.parseInline = tc.parseInline),
    (tp.Parser = ta),
    (tp.parser = ta.parse),
    (tp.Renderer = tl),
    (tp.TextRenderer = ts),
    (tp.Lexer = ti),
    (tp.lexer = ti.lex),
    (tp.Tokenizer = tr),
    (tp.Hooks = to),
    (tp.parse = tp),
    tp.options,
    tp.setOptions,
    tp.use,
    tp.walkTokens,
    tp.parseInline,
    ta.parse,
    ti.lex;
