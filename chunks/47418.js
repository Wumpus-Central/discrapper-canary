d.d(t, { t: () => tm });
var i = d(248702),
    c = d(695742),
    { entries: e, setPrototypeOf: a, isFrozen: s, getPrototypeOf: Z, getOwnPropertyDescriptor: n } = Object,
    { freeze: b, seal: m, create: o } = Object,
    { apply: u, construct: h } = "u" > typeof Reflect && Reflect;
(b ||= function (l) {
    return l;
}),
    (m ||= function (l) {
        return l;
    }),
    (u ||= function (l, t) {
        var d = [...arguments].slice(2);
        return l.apply(t, d);
    }),
    (h ||= function (l) {
        return new l(...[...arguments].slice(1));
    });
var W = w(Array.prototype.forEach),
    G = w(Array.prototype.lastIndexOf),
    p = w(Array.prototype.pop),
    N = w(Array.prototype.push),
    M = w(Array.prototype.splice),
    X = w(String.prototype.toLowerCase),
    y = w(String.prototype.toString),
    Y = w(String.prototype.match),
    r = w(String.prototype.replace),
    T = w(String.prototype.indexOf),
    V = w(String.prototype.trim),
    L = w(Object.prototype.hasOwnProperty),
    I = w(RegExp.prototype.test),
    z =
        ((x = TypeError),
        function () {
            return h(x, [...arguments]);
        });
function w(l) {
    return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        var d = [...arguments].slice(1);
        return u(l, t, d);
    };
}
function R(l, t) {
    let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : X;
    a && a(l, null);
    let i = t.length;
    for (; i--; ) {
        let c = t[i];
        if ("string" == typeof c) {
            let l = d(c);
            l !== c && (s(t) || (t[i] = l), (c = l));
        }
        l[c] = !0;
    }
    return l;
}
function C(l) {
    let t = o(null);
    for (let [d, i] of e(l))
        L(l, d) &&
            (Array.isArray(i)
                ? (t[d] = (function (l) {
                      for (let t = 0; t < l.length; t++) L(l, t) || (l[t] = null);
                      return l;
                  })(i))
                : i && "object" == typeof i && i.constructor === Object
                  ? (t[d] = C(i))
                  : (t[d] = i));
    return t;
}
function S(l, t) {
    for (; null !== l; ) {
        let d = n(l, t);
        if (d) {
            if (d.get) return w(d.get);
            if ("function" == typeof d.value) return w(d.value);
        }
        l = Z(l);
    }
    return function () {
        return null;
    };
}
var x,
    g,
    D = b(
        "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(
            ".",
        ),
    ),
    j = b(
        "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(
            ".",
        ),
    ),
    U = b([
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
    F = b([
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
    J = b(
        "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(
            ".",
        ),
    ),
    O = b([
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
    k = b(["#text"]),
    E = b(
        "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(
            ".",
        ),
    ),
    v = b(
        "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(
            ".",
        ),
    ),
    K = b(
        "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(
            ".",
        ),
    ),
    H = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Q = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    P = m(/<%[\w\W]*|[\w\W]*%>/gm),
    f = m(/\$\{[\w\W]*/gm),
    B = m(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    A = m(/^aria-[\-\w]+$/),
    _ = m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    $ = m(/^(?:\w+script|data):/i),
    q = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    ll = m(/^html$/i),
    lt = Object.freeze({
        __proto__: null,
        ARIA_ATTR: A,
        ATTR_WHITESPACE: q,
        CUSTOM_ELEMENT: m(/^[a-z][.\w]*(-[.\w]+)+$/i),
        DATA_ATTR: B,
        DOCTYPE_NAME: ll,
        ERB_EXPR: P,
        IS_ALLOWED_URI: _,
        IS_SCRIPT_OR_DATA: $,
        MUSTACHE_EXPR: Q,
        TMPLIT_EXPR: f,
    }),
    ld = function (l, t) {
        if ("object" != typeof l || "function" != typeof l.createPolicy) return null;
        let d = null,
            i = "data-tt-policy-suffix";
        t && t.hasAttribute(i) && (d = t.getAttribute(i));
        let c = "dompurify" + (d ? "#" + d : "");
        try {
            return l.createPolicy(c, { createHTML: (l) => l, createScriptURL: (l) => l });
        } catch {
            return console.warn("TrustedTypes policy " + c + " could not be created."), null;
        }
    },
    li = function () {
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
    lc = (function l() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : typeof window > "u" ? null : window,
            d = (t) => l(t);
        if (((d.version = "3.3.3"), (d.removed = []), !t || !t.document || 9 !== t.document.nodeType || !t.Element))
            return (d.isSupported = !1), d;
        let { document: i } = t,
            c = i,
            a = c.currentScript,
            {
                DocumentFragment: s,
                HTMLTemplateElement: Z,
                Node: n,
                Element: m,
                NodeFilter: u,
                NamedNodeMap: h = t.NamedNodeMap || t.MozNamedAttrMap,
                HTMLFormElement: w,
                DOMParser: x,
                trustedTypes: g,
            } = t,
            Q = m.prototype,
            P = S(Q, "cloneNode"),
            f = S(Q, "remove"),
            B = S(Q, "nextSibling"),
            A = S(Q, "childNodes"),
            $ = S(Q, "parentNode");
        if ("function" == typeof Z) {
            let l = i.createElement("template");
            l.content && l.content.ownerDocument && (i = l.content.ownerDocument);
        }
        let q,
            lc = "",
            { implementation: le, createNodeIterator: la, createDocumentFragment: ls, getElementsByTagName: lZ } = i,
            { importNode: ln } = c,
            lb = li();
        d.isSupported = "function" == typeof e && "function" == typeof $ && le && void 0 !== le.createHTMLDocument;
        let {
                MUSTACHE_EXPR: lm,
                ERB_EXPR: lo,
                TMPLIT_EXPR: lu,
                DATA_ATTR: lh,
                ARIA_ATTR: lW,
                IS_SCRIPT_OR_DATA: lG,
                ATTR_WHITESPACE: lp,
                CUSTOM_ELEMENT: lN,
            } = lt,
            { IS_ALLOWED_URI: lM } = lt,
            lX = null,
            ly = R({}, [...D, ...j, ...U, ...J, ...k]),
            lY = null,
            lr = R({}, [...E, ...v, ...K, ...H]),
            lT = Object.seal(
                o(null, {
                    tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                }),
            ),
            lV = null,
            lL = null,
            lI = Object.seal(
                o(null, {
                    tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                    attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                }),
            ),
            lz = !0,
            lw = !0,
            lR = !1,
            lC = !0,
            lS = !1,
            lx = !0,
            lg = !1,
            lD = !1,
            lj = !1,
            lU = !1,
            lF = !1,
            lJ = !1,
            lO = !0,
            lk = !1,
            lE = !0,
            lv = !1,
            lK = {},
            lH = null,
            lQ = R({}, [
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
            lP = null,
            lf = R({}, ["audio", "video", "img", "source", "image", "track"]),
            lB = null,
            lA = R({}, [
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
            l_ = "http://www.w3.org/1998/Math/MathML",
            l$ = "http://www.w3.org/2000/svg",
            lq = "http://www.w3.org/1999/xhtml",
            l2 = lq,
            l0 = !1,
            l1 = null,
            l5 = R({}, [l_, l$, lq], y),
            l3 = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
            l9 = R({}, ["annotation-xml"]),
            l4 = R({}, ["title", "style", "font", "a", "script"]),
            l7 = null,
            l6 = ["application/xhtml+xml", "text/html"],
            l8 = null,
            tl = null,
            tt = i.createElement("form"),
            td = function (l) {
                return l instanceof RegExp || l instanceof Function;
            },
            ti = function () {
                let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(tl && tl === l)) {
                    if (
                        ((l && "object" == typeof l) || (l = {}),
                        (l = C(l)),
                        (l8 =
                            "application/xhtml+xml" ===
                            (l7 = -1 === l6.indexOf(l.PARSER_MEDIA_TYPE) ? "text/html" : l.PARSER_MEDIA_TYPE)
                                ? y
                                : X),
                        (lX = L(l, "ALLOWED_TAGS") ? R({}, l.ALLOWED_TAGS, l8) : ly),
                        (lY = L(l, "ALLOWED_ATTR") ? R({}, l.ALLOWED_ATTR, l8) : lr),
                        (l1 = L(l, "ALLOWED_NAMESPACES") ? R({}, l.ALLOWED_NAMESPACES, y) : l5),
                        (lB = L(l, "ADD_URI_SAFE_ATTR") ? R(C(lA), l.ADD_URI_SAFE_ATTR, l8) : lA),
                        (lP = L(l, "ADD_DATA_URI_TAGS") ? R(C(lf), l.ADD_DATA_URI_TAGS, l8) : lf),
                        (lH = L(l, "FORBID_CONTENTS") ? R({}, l.FORBID_CONTENTS, l8) : lQ),
                        (lV = L(l, "FORBID_TAGS") ? R({}, l.FORBID_TAGS, l8) : C({})),
                        (lL = L(l, "FORBID_ATTR") ? R({}, l.FORBID_ATTR, l8) : C({})),
                        (lK = !!L(l, "USE_PROFILES") && l.USE_PROFILES),
                        (lz = !1 !== l.ALLOW_ARIA_ATTR),
                        (lw = !1 !== l.ALLOW_DATA_ATTR),
                        (lR = l.ALLOW_UNKNOWN_PROTOCOLS || !1),
                        (lC = !1 !== l.ALLOW_SELF_CLOSE_IN_ATTR),
                        (lS = l.SAFE_FOR_TEMPLATES || !1),
                        (lx = !1 !== l.SAFE_FOR_XML),
                        (lg = l.WHOLE_DOCUMENT || !1),
                        (lU = l.RETURN_DOM || !1),
                        (lF = l.RETURN_DOM_FRAGMENT || !1),
                        (lJ = l.RETURN_TRUSTED_TYPE || !1),
                        (lj = l.FORCE_BODY || !1),
                        (lO = !1 !== l.SANITIZE_DOM),
                        (lk = l.SANITIZE_NAMED_PROPS || !1),
                        (lE = !1 !== l.KEEP_CONTENT),
                        (lv = l.IN_PLACE || !1),
                        (lM = l.ALLOWED_URI_REGEXP || _),
                        (l2 = l.NAMESPACE || lq),
                        (l3 = l.MATHML_TEXT_INTEGRATION_POINTS || l3),
                        (l9 = l.HTML_INTEGRATION_POINTS || l9),
                        (lT = l.CUSTOM_ELEMENT_HANDLING || {}),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            td(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                            (lT.tagNameCheck = l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            td(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                            (lT.attributeNameCheck = l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        l.CUSTOM_ELEMENT_HANDLING &&
                            "boolean" == typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                            (lT.allowCustomizedBuiltInElements =
                                l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        lS && (lw = !1),
                        lF && (lU = !0),
                        lK &&
                            ((lX = R({}, k)),
                            (lY = o(null)),
                            !0 === lK.html && (R(lX, D), R(lY, E)),
                            !0 === lK.svg && (R(lX, j), R(lY, v), R(lY, H)),
                            !0 === lK.svgFilters && (R(lX, U), R(lY, v), R(lY, H)),
                            !0 === lK.mathMl && (R(lX, J), R(lY, K), R(lY, H))),
                        L(l, "ADD_TAGS") || (lI.tagCheck = null),
                        L(l, "ADD_ATTR") || (lI.attributeCheck = null),
                        l.ADD_TAGS &&
                            ("function" == typeof l.ADD_TAGS
                                ? (lI.tagCheck = l.ADD_TAGS)
                                : (lX === ly && (lX = C(lX)), R(lX, l.ADD_TAGS, l8))),
                        l.ADD_ATTR &&
                            ("function" == typeof l.ADD_ATTR
                                ? (lI.attributeCheck = l.ADD_ATTR)
                                : (lY === lr && (lY = C(lY)), R(lY, l.ADD_ATTR, l8))),
                        l.ADD_URI_SAFE_ATTR && R(lB, l.ADD_URI_SAFE_ATTR, l8),
                        l.FORBID_CONTENTS && (lH === lQ && (lH = C(lH)), R(lH, l.FORBID_CONTENTS, l8)),
                        l.ADD_FORBID_CONTENTS && (lH === lQ && (lH = C(lH)), R(lH, l.ADD_FORBID_CONTENTS, l8)),
                        lE && (lX["#text"] = !0),
                        lg && R(lX, ["html", "head", "body"]),
                        lX.table && (R(lX, ["tbody"]), delete lV.tbody),
                        l.TRUSTED_TYPES_POLICY)
                    ) {
                        if ("function" != typeof l.TRUSTED_TYPES_POLICY.createHTML)
                            throw z('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof l.TRUSTED_TYPES_POLICY.createScriptURL)
                            throw z('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        lc = (q = l.TRUSTED_TYPES_POLICY).createHTML("");
                    } else
                        void 0 === q && (q = ld(g, a)), null !== q && "string" == typeof lc && (lc = q.createHTML(""));
                    b && b(l), (tl = l);
                }
            },
            tc = R({}, [...j, ...U, ...F]),
            te = R({}, [...J, ...O]),
            ta = function (l) {
                let t = $(l);
                (t && t.tagName) || (t = { namespaceURI: l2, tagName: "template" });
                let d = X(l.tagName),
                    i = X(t.tagName);
                return (
                    !!l1[l.namespaceURI] &&
                    (l.namespaceURI === l$
                        ? t.namespaceURI === lq
                            ? "svg" === d
                            : t.namespaceURI === l_
                              ? "svg" === d && ("annotation-xml" === i || l3[i])
                              : !!tc[d]
                        : l.namespaceURI === l_
                          ? t.namespaceURI === lq
                              ? "math" === d
                              : t.namespaceURI === l$
                                ? "math" === d && l9[i]
                                : !!te[d]
                          : l.namespaceURI === lq
                            ? (t.namespaceURI !== l$ || !!l9[i]) &&
                              (t.namespaceURI !== l_ || !!l3[i]) &&
                              !te[d] &&
                              (l4[d] || !tc[d])
                            : !!("application/xhtml+xml" === l7 && l1[l.namespaceURI]))
                );
            },
            ts = function (l) {
                N(d.removed, { element: l });
                try {
                    $(l).removeChild(l);
                } catch {
                    f(l);
                }
            },
            tZ = function (l, t) {
                try {
                    N(d.removed, { attribute: t.getAttributeNode(l), from: t });
                } catch {
                    N(d.removed, { attribute: null, from: t });
                }
                if ((t.removeAttribute(l), "is" === l))
                    if (lU || lF)
                        try {
                            ts(t);
                        } catch {}
                    else
                        try {
                            t.setAttribute(l, "");
                        } catch {}
            },
            tn = function (l) {
                let t = null,
                    d = null;
                if (lj) l = "<remove></remove>" + l;
                else {
                    let t = Y(l, /^[\r\n\t ]+/);
                    d = t && t[0];
                }
                "application/xhtml+xml" === l7 &&
                    l2 === lq &&
                    (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
                let c = q ? q.createHTML(l) : l;
                if (l2 === lq)
                    try {
                        t = new x().parseFromString(c, l7);
                    } catch {}
                if (!t || !t.documentElement) {
                    t = le.createDocument(l2, "template", null);
                    try {
                        t.documentElement.innerHTML = l0 ? lc : c;
                    } catch {}
                }
                let e = t.body || t.documentElement;
                return (
                    l && d && e.insertBefore(i.createTextNode(d), e.childNodes[0] || null),
                    l2 === lq ? lZ.call(t, lg ? "html" : "body")[0] : lg ? t.documentElement : e
                );
            },
            tb = function (l) {
                return la.call(
                    l.ownerDocument || l,
                    l,
                    u.SHOW_ELEMENT |
                        u.SHOW_COMMENT |
                        u.SHOW_TEXT |
                        u.SHOW_PROCESSING_INSTRUCTION |
                        u.SHOW_CDATA_SECTION,
                    null,
                );
            },
            tm = function (l) {
                return (
                    l instanceof w &&
                    ("string" != typeof l.nodeName ||
                        "string" != typeof l.textContent ||
                        "function" != typeof l.removeChild ||
                        !(l.attributes instanceof h) ||
                        "function" != typeof l.removeAttribute ||
                        "function" != typeof l.setAttribute ||
                        "string" != typeof l.namespaceURI ||
                        "function" != typeof l.insertBefore ||
                        "function" != typeof l.hasChildNodes)
                );
            },
            to = function (l) {
                return "function" == typeof n && l instanceof n;
            };
        function tu(l, t, i) {
            W(l, (l) => {
                l.call(d, t, i, tl);
            });
        }
        let th = function (l) {
                let t = null;
                if ((tu(lb.beforeSanitizeElements, l, null), tm(l))) return ts(l), !0;
                let i = l8(l.nodeName);
                if (
                    (tu(lb.uponSanitizeElement, l, { tagName: i, allowedTags: lX }),
                    (lx &&
                        l.hasChildNodes() &&
                        !to(l.firstElementChild) &&
                        I(/<[/\w!]/g, l.innerHTML) &&
                        I(/<[/\w!]/g, l.textContent)) ||
                        7 === l.nodeType ||
                        (lx && 8 === l.nodeType && I(/<[/\w]/g, l.data)))
                )
                    return ts(l), !0;
                if (!(lI.tagCheck instanceof Function && lI.tagCheck(i)) && (!lX[i] || lV[i])) {
                    if (
                        !lV[i] &&
                        tG(i) &&
                        ((lT.tagNameCheck instanceof RegExp && I(lT.tagNameCheck, i)) ||
                            (lT.tagNameCheck instanceof Function && lT.tagNameCheck(i)))
                    )
                        return !1;
                    if (lE && !lH[i]) {
                        let t = $(l) || l.parentNode,
                            d = A(l) || l.childNodes;
                        if (d && t) {
                            let i = d.length;
                            for (let c = i - 1; c >= 0; --c) {
                                let i = P(d[c], !0);
                                (i.__removalCount = (l.__removalCount || 0) + 1), t.insertBefore(i, B(l));
                            }
                        }
                    }
                    return ts(l), !0;
                }
                return (l instanceof m && !ta(l)) ||
                    (("noscript" === i || "noembed" === i || "noframes" === i) &&
                        I(/<\/no(script|embed|frames)/i, l.innerHTML))
                    ? (ts(l), !0)
                    : (lS &&
                          3 === l.nodeType &&
                          ((t = l.textContent),
                          W([lm, lo, lu], (l) => {
                              t = r(t, l, " ");
                          }),
                          l.textContent !== t && (N(d.removed, { element: l.cloneNode() }), (l.textContent = t))),
                      tu(lb.afterSanitizeElements, l, null),
                      !1);
            },
            tW = function (l, t, d) {
                if (lL[t] || (lO && ("id" === t || "name" === t) && (d in i || d in tt))) return !1;
                if (
                    !(lw && !lL[t] && I(lh, t)) &&
                    !(lz && I(lW, t)) &&
                    !(lI.attributeCheck instanceof Function && lI.attributeCheck(t, l))
                ) {
                    if (!lY[t] || lL[t]) {
                        if (
                            !(
                                (tG(l) &&
                                    ((lT.tagNameCheck instanceof RegExp && I(lT.tagNameCheck, l)) ||
                                        (lT.tagNameCheck instanceof Function && lT.tagNameCheck(l))) &&
                                    ((lT.attributeNameCheck instanceof RegExp && I(lT.attributeNameCheck, t)) ||
                                        (lT.attributeNameCheck instanceof Function && lT.attributeNameCheck(t, l)))) ||
                                ("is" === t &&
                                    lT.allowCustomizedBuiltInElements &&
                                    ((lT.tagNameCheck instanceof RegExp && I(lT.tagNameCheck, d)) ||
                                        (lT.tagNameCheck instanceof Function && lT.tagNameCheck(d))))
                            )
                        )
                            return !1;
                    } else if (
                        !lB[t] &&
                        !I(lM, r(d, lp, "")) &&
                        !(
                            ("src" === t || "xlink:href" === t || "href" === t) &&
                            "script" !== l &&
                            0 === T(d, "data:") &&
                            lP[l]
                        ) &&
                        !(lR && !I(lG, r(d, lp, ""))) &&
                        d
                    )
                        return !1;
                }
                return !0;
            },
            tG = function (l) {
                return "annotation-xml" !== l && Y(l, lN);
            },
            tp = function (l) {
                tu(lb.beforeSanitizeAttributes, l, null);
                let { attributes: t } = l;
                if (!t || tm(l)) return;
                let i = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: lY, forceKeepAttr: void 0 },
                    c = t.length;
                for (; c--; ) {
                    let { name: e, namespaceURI: a, value: s } = t[c],
                        Z = l8(e),
                        n = "value" === e ? s : V(s);
                    if (
                        ((i.attrName = Z),
                        (i.attrValue = n),
                        (i.keepAttr = !0),
                        (i.forceKeepAttr = void 0),
                        tu(lb.uponSanitizeAttribute, l, i),
                        (n = i.attrValue),
                        lk && ("id" === Z || "name" === Z) && (tZ(e, l), (n = "user-content-" + n)),
                        (lx &&
                            I(
                                /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
                                n,
                            )) ||
                            ("attributename" === Z && Y(n, "href")))
                    ) {
                        tZ(e, l);
                        continue;
                    }
                    if (i.forceKeepAttr) continue;
                    if (!i.keepAttr || (!lC && I(/\/>/i, n))) {
                        tZ(e, l);
                        continue;
                    }
                    lS &&
                        W([lm, lo, lu], (l) => {
                            n = r(n, l, " ");
                        });
                    let b = l8(l.nodeName);
                    if (!tW(b, Z, n)) {
                        tZ(e, l);
                        continue;
                    }
                    if (q && "object" == typeof g && "function" == typeof g.getAttributeType && !a)
                        switch (g.getAttributeType(b, Z)) {
                            case "TrustedHTML":
                                n = q.createHTML(n);
                                break;
                            case "TrustedScriptURL":
                                n = q.createScriptURL(n);
                        }
                    if (n !== s)
                        try {
                            a ? l.setAttributeNS(a, e, n) : l.setAttribute(e, n), tm(l) ? ts(l) : p(d.removed);
                        } catch {
                            tZ(e, l);
                        }
                }
                tu(lb.afterSanitizeAttributes, l, null);
            },
            tN = function l(t) {
                let d = null,
                    i = tb(t);
                for (tu(lb.beforeSanitizeShadowDOM, t, null); (d = i.nextNode()); )
                    tu(lb.uponSanitizeShadowNode, d, null), th(d), tp(d), d.content instanceof s && l(d.content);
                tu(lb.afterSanitizeShadowDOM, t, null);
            };
        return (
            (d.sanitize = function (l) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null,
                    e = null,
                    a = null,
                    Z = null;
                if (((l0 = !l) && (l = "\x3c!--\x3e"), "string" != typeof l && !to(l)))
                    if ("function" == typeof l.toString) {
                        if ("string" != typeof (l = l.toString())) throw z("dirty is not a string, aborting");
                    } else throw z("toString is not a function");
                if (!d.isSupported) return l;
                if ((lD || ti(t), (d.removed = []), "string" == typeof l && (lv = !1), lv)) {
                    if (l.nodeName) {
                        let t = l8(l.nodeName);
                        if (!lX[t] || lV[t]) throw z("root node is forbidden and cannot be sanitized in-place");
                    }
                } else if (l instanceof n)
                    (1 === (e = (i = tn("\x3c!----\x3e")).ownerDocument.importNode(l, !0)).nodeType &&
                        "BODY" === e.nodeName) ||
                    "HTML" === e.nodeName
                        ? (i = e)
                        : i.appendChild(e);
                else {
                    if (!lU && !lS && !lg && -1 === l.indexOf("<")) return q && lJ ? q.createHTML(l) : l;
                    if (!(i = tn(l))) return lU ? null : lJ ? lc : "";
                }
                i && lj && ts(i.firstChild);
                let b = tb(lv ? l : i);
                for (; (a = b.nextNode()); ) th(a), tp(a), a.content instanceof s && tN(a.content);
                if (lv) return l;
                if (lU) {
                    if (lF) for (Z = ls.call(i.ownerDocument); i.firstChild; ) Z.appendChild(i.firstChild);
                    else Z = i;
                    return (lY.shadowroot || lY.shadowrootmode) && (Z = ln.call(c, Z, !0)), Z;
                }
                let m = lg ? i.outerHTML : i.innerHTML;
                return (
                    lg &&
                        lX["!doctype"] &&
                        i.ownerDocument &&
                        i.ownerDocument.doctype &&
                        i.ownerDocument.doctype.name &&
                        I(ll, i.ownerDocument.doctype.name) &&
                        (m = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + m),
                    lS &&
                        W([lm, lo, lu], (l) => {
                            m = r(m, l, " ");
                        }),
                    q && lJ ? q.createHTML(m) : m
                );
            }),
            (d.setConfig = function () {
                ti(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (lD = !0);
            }),
            (d.clearConfig = function () {
                (tl = null), (lD = !1);
            }),
            (d.isValidAttribute = function (l, t, d) {
                return tl || ti({}), tW(l8(l), l8(t), d);
            }),
            (d.addHook = function (l, t) {
                "function" == typeof t && N(lb[l], t);
            }),
            (d.removeHook = function (l, t) {
                if (void 0 !== t) {
                    let d = G(lb[l], t);
                    return -1 === d ? void 0 : M(lb[l], d, 1)[0];
                }
                return p(lb[l]);
            }),
            (d.removeHooks = function (l) {
                lb[l] = [];
            }),
            (d.removeAllHooks = function () {
                lb = li();
            }),
            d
        );
    })();
function le() {
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
var la = le(),
    ls = { exec: () => null };
function lZ(l, t = "") {
    let d = "string" == typeof l ? l : l.source,
        i = {
            replace: (l, t) => {
                let c = "string" == typeof t ? t : t.source;
                return (c = c.replace(lb.caret, "$1")), (d = d.replace(l, c)), i;
            },
            getRegex: () => new RegExp(d, t),
        };
    return i;
}
var ln = (() => {
        try {
            return !0;
        } catch {
            return !1;
        }
    })(),
    lb = {
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
        listItemRegex: (l) => RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (l) =>
            RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}#`),
        htmlBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}<(?:[a-z].*>|!--)`, "i"),
        blockquoteBeginRegex: (l) => RegExp(`^ {0,${Math.min(3, l - 1)}}>`),
    },
    lm = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    lo = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
    lu =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    lh = lZ(lu)
        .replace(/bull/g, lo)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, "")
        .getRegex(),
    lW = lZ(lu)
        .replace(/bull/g, lo)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex(),
    lG = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    lp = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    lN = lZ(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
        .replace("label", lp)
        .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex(),
    lM = lZ(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, lo)
        .getRegex(),
    lX =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    ly = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    lY = lZ(
        "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
        "i",
    )
        .replace("comment", ly)
        .replace("tag", lX)
        .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex(),
    lr = lZ(lG)
        .replace("hr", lm)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", lX)
        .getRegex(),
    lT = {
        blockquote: lZ(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
            .replace("paragraph", lr)
            .getRegex(),
        code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
        def: lN,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: lm,
        html: lY,
        lheading: lh,
        list: lM,
        newline: /^(?:[ \t]*(?:\n|$))+/,
        paragraph: lr,
        table: ls,
        text: /^[^\n]+/,
    },
    lV = lZ(
        "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
        .replace("hr", lm)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("blockquote", " {0,3}>")
        .replace("code", "(?: {4}| {0,3}	)[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", lX)
        .getRegex(),
    lL = {
        ...lT,
        lheading: lW,
        table: lV,
        paragraph: lZ(lG)
            .replace("hr", lm)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", lV)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
            .replace("tag", lX)
            .getRegex(),
    },
    lI = {
        ...lT,
        html: lZ(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
        )
            .replace("comment", ly)
            .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: ls,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: lZ(lG)
            .replace("hr", lm)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", lh)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
    },
    lz = /^( {2,}|\\)\n(?!\s*$)/,
    lw = /[\p{P}\p{S}]/u,
    lR = /[\s\p{P}\p{S}]/u,
    lC = /[^\s\p{P}\p{S}]/u,
    lS = lZ(/^((?![*_])punctSpace)/, "u")
        .replace(/punctSpace/g, lR)
        .getRegex(),
    lx = /(?!~)[\p{P}\p{S}]/u,
    lg = lZ(/link|precode-code|html/, "g")
        .replace(
            "link",
            /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
        )
        .replace("precode-", ln ? "(?<!`)()" : "(^^|[^`])")
        .replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/)
        .replace("html", /<(?! )[^<>]*?>/)
        .getRegex(),
    lD = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
    lj = lZ(lD, "u").replace(/punct/g, lw).getRegex(),
    lU = lZ(lD, "u").replace(/punct/g, lx).getRegex(),
    lF =
        "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    lJ = lZ(lF, "gu")
        .replace(/notPunctSpace/g, lC)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lO = lZ(lF, "gu")
        .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
        .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
        .replace(/punct/g, lx)
        .getRegex(),
    lk = lZ(
        "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
        "gu",
    )
        .replace(/notPunctSpace/g, lC)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lE = lZ(/^~~?(?:((?!~)punct)|[^\s~])/, "u")
        .replace(/punct/g, lw)
        .getRegex(),
    lv = lZ(
        "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
        "gu",
    )
        .replace(/notPunctSpace/g, lC)
        .replace(/punctSpace/g, lR)
        .replace(/punct/g, lw)
        .getRegex(),
    lK = lZ(/\\(punct)/, "gu")
        .replace(/punct/g, lw)
        .getRegex(),
    lH = lZ(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex(),
    lQ = lZ(ly).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
    lP = lZ(
        "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
        .replace("comment", lQ)
        .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex(),
    lf = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
    lB = lZ(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/)
        .replace("label", lf)
        .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex(),
    lA = lZ(/^!?\[(label)\]\[(ref)\]/)
        .replace("label", lf)
        .replace("ref", lp)
        .getRegex(),
    l_ = lZ(/^!?\[(ref)\](?:\[\])?/)
        .replace("ref", lp)
        .getRegex(),
    l$ = lZ("reflink|nolink(?!\\()", "g").replace("reflink", lA).replace("nolink", l_).getRegex(),
    lq = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
    l2 = {
        _backpedal: ls,
        anyPunctuation: lK,
        autolink: lH,
        blockSkip: lg,
        br: lz,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: ls,
        delLDelim: ls,
        delRDelim: ls,
        emStrongLDelim: lj,
        emStrongRDelimAst: lJ,
        emStrongRDelimUnd: lk,
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        link: lB,
        nolink: l_,
        punctuation: lS,
        reflink: lA,
        reflinkSearch: l$,
        tag: lP,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: ls,
    },
    l0 = {
        ...l2,
        link: lZ(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", lf)
            .getRegex(),
        reflink: lZ(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", lf)
            .getRegex(),
    },
    l1 = {
        ...l2,
        emStrongRDelimAst: lO,
        emStrongLDelim: lU,
        delLDelim: lE,
        delRDelim: lv,
        url: lZ(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
            .replace("protocol", lq)
            .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
            .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: lZ(
            /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        )
            .replace("protocol", lq)
            .getRegex(),
    },
    l5 = {
        ...l1,
        br: lZ(lz).replace("{2,}", "*").getRegex(),
        text: lZ(l1.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
    },
    l3 = { normal: lT, gfm: lL, pedantic: lI },
    l9 = { normal: l2, gfm: l1, breaks: l5, pedantic: l0 },
    l4 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    l7 = (l) => l4[l];
function l6(l, t) {
    if (t) {
        if (lb.escapeTest.test(l)) return l.replace(lb.escapeReplace, l7);
    } else if (lb.escapeTestNoEncode.test(l)) return l.replace(lb.escapeReplaceNoEncode, l7);
    return l;
}
function l8(l) {
    try {
        l = encodeURI(l).replace(lb.percentDecode, "%");
    } catch {
        return null;
    }
    return l;
}
function tl(l, t) {
    let d = l
            .replace(lb.findPipe, (l, t, d) => {
                let i = !1,
                    c = t;
                for (; --c >= 0 && "\\" === d[c]; ) i = !i;
                return i ? "|" : " |";
            })
            .split(lb.splitPipe),
        i = 0;
    if ((d[0].trim() || d.shift(), d.length > 0 && !d.at(-1)?.trim() && d.pop(), t))
        if (d.length > t) d.splice(t);
        else for (; d.length < t; ) d.push("");
    for (; i < d.length; i++) d[i] = d[i].trim().replace(lb.slashPipe, "|");
    return d;
}
function tt(l, t, d) {
    let i = l.length;
    if (0 === i) return "";
    let c = 0;
    for (; c < i; ) {
        let e = l.charAt(i - c - 1);
        if (e !== t || d)
            if (e !== t && d) c++;
            else break;
        else c++;
    }
    return l.slice(0, i - c);
}
function td(l, t, d, i, c) {
    let e = t.href,
        a = t.title || null,
        s = l[1].replace(c.other.outputLinkReplace, "$1");
    i.state.inLink = !0;
    let Z = {
        type: "!" === l[0].charAt(0) ? "image" : "link",
        raw: d,
        href: e,
        title: a,
        text: s,
        tokens: i.inlineTokens(s),
    };
    return (i.state.inLink = !1), Z;
}
var ti = class {
        constructor(l) {
            (0, c.t)(this, "options", void 0),
                (0, c.t)(this, "rules", void 0),
                (0, c.t)(this, "lexer", void 0),
                (this.options = l || la);
        }
        space(l) {
            let t = this.rules.block.newline.exec(l);
            if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(l) {
            let t = this.rules.block.code.exec(l);
            if (t) {
                let l = t[0].replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? l : tt(l, "\n"),
                };
            }
        }
        fences(l) {
            let t = this.rules.block.fences.exec(l);
            if (t) {
                let l = t[0],
                    d = (function (l, t, d) {
                        let i = l.match(d.other.indentCodeCompensation);
                        if (null === i) return t;
                        let c = i[1];
                        return t
                            .split("\n")
                            .map((l) => {
                                let t = l.match(d.other.beginningSpace);
                                if (null === t) return l;
                                let [i] = t;
                                return i.length >= c.length ? l.slice(c.length) : l;
                            })
                            .join("\n");
                    })(l, t[3] || "", this.rules);
                return {
                    type: "code",
                    raw: l,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: d,
                };
            }
        }
        heading(l) {
            let t = this.rules.block.heading.exec(l);
            if (t) {
                let l = t[2].trim();
                if (this.rules.other.endingHash.test(l)) {
                    let t = tt(l, "#");
                    (this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (l = t.trim());
                }
                return { type: "heading", raw: t[0], depth: t[1].length, text: l, tokens: this.lexer.inline(l) };
            }
        }
        hr(l) {
            let t = this.rules.block.hr.exec(l);
            if (t) return { type: "hr", raw: tt(t[0], "\n") };
        }
        blockquote(l) {
            let t = this.rules.block.blockquote.exec(l);
            if (t) {
                let l = tt(t[0], "\n").split("\n"),
                    d = "",
                    i = "",
                    c = [];
                for (; l.length > 0; ) {
                    let t = !1,
                        e = [],
                        a;
                    for (a = 0; a < l.length; a++)
                        if (this.rules.other.blockquoteStart.test(l[a])) e.push(l[a]), (t = !0);
                        else if (t) break;
                        else e.push(l[a]);
                    l = l.slice(a);
                    let s = e.join("\n"),
                        Z = s
                            .replace(this.rules.other.blockquoteSetextReplace, "\n    $1")
                            .replace(this.rules.other.blockquoteSetextReplace2, "");
                    (d = d
                        ? `${d}
${s}`
                        : s),
                        (i = i
                            ? `${i}
${Z}`
                            : Z);
                    let n = this.lexer.state.top;
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(Z, c, !0),
                        (this.lexer.state.top = n),
                        0 === l.length)
                    )
                        break;
                    let b = c.at(-1);
                    if (b?.type === "code") break;
                    if (b?.type === "blockquote") {
                        let t = b.raw + "\n" + l.join("\n"),
                            e = this.blockquote(t);
                        (c[c.length - 1] = e),
                            (d = d.substring(0, d.length - b.raw.length) + e.raw),
                            (i = i.substring(0, i.length - b.text.length) + e.text);
                        break;
                    }
                    if (b?.type === "list") {
                        let t = b.raw + "\n" + l.join("\n"),
                            e = this.list(t);
                        (c[c.length - 1] = e),
                            (d = d.substring(0, d.length - b.raw.length) + e.raw),
                            (i = i.substring(0, i.length - b.raw.length) + e.raw),
                            (l = t.substring(c.at(-1).raw.length).split("\n"));
                        continue;
                    }
                }
                return { type: "blockquote", raw: d, tokens: c, text: i };
            }
        }
        list(l) {
            let t = this.rules.block.list.exec(l);
            if (t) {
                let d = t[1].trim(),
                    i = d.length > 1,
                    c = { type: "list", raw: "", ordered: i, start: i ? +d.slice(0, -1) : "", loose: !1, items: [] };
                (d = i ? `\\d{1,9}\\${d.slice(-1)}` : `\\${d}`), this.options.pedantic && (d = i ? d : "[*+-]");
                let e = this.rules.other.listItemRegex(d),
                    a = !1;
                for (; l; ) {
                    let d = !1,
                        i = "",
                        s = "";
                    if (!(t = e.exec(l)) || this.rules.block.hr.test(l)) break;
                    (i = t[0]), (l = l.substring(i.length));
                    let Z = (function (l, t = 0) {
                            let d = t,
                                i = "";
                            for (let t of l)
                                if ("	" === t) {
                                    let l = 4 - (d % 4);
                                    (i += " ".repeat(l)), (d += l);
                                } else (i += t), d++;
                            return i;
                        })(t[2].split("\n", 1)[0], t[1].length),
                        n = l.split("\n", 1)[0],
                        b = !Z.trim(),
                        m = 0;
                    if (
                        (this.options.pedantic
                            ? ((m = 2), (s = Z.trimStart()))
                            : b
                              ? (m = t[1].length + 1)
                              : ((m = (m = Z.search(this.rules.other.nonSpaceChar)) > 4 ? 1 : m),
                                (s = Z.slice(m)),
                                (m += t[1].length)),
                        b &&
                            this.rules.other.blankLine.test(n) &&
                            ((i += n + "\n"), (l = l.substring(n.length + 1)), (d = !0)),
                        !d)
                    ) {
                        let t = this.rules.other.nextBulletRegex(m),
                            d = this.rules.other.hrRegex(m),
                            c = this.rules.other.fencesBeginRegex(m),
                            e = this.rules.other.headingBeginRegex(m),
                            a = this.rules.other.htmlBeginRegex(m),
                            o = this.rules.other.blockquoteBeginRegex(m);
                        for (; l; ) {
                            let u = l.split("\n", 1)[0],
                                h;
                            if (
                                ((n = u),
                                (h = this.options.pedantic
                                    ? (n = n.replace(this.rules.other.listReplaceNesting, "  "))
                                    : n.replace(this.rules.other.tabCharGlobal, "    ")),
                                c.test(n) || e.test(n) || a.test(n) || o.test(n) || t.test(n) || d.test(n))
                            )
                                break;
                            if (h.search(this.rules.other.nonSpaceChar) >= m || !n.trim()) s += "\n" + h.slice(m);
                            else {
                                if (
                                    b ||
                                    Z.replace(this.rules.other.tabCharGlobal, "    ").search(
                                        this.rules.other.nonSpaceChar,
                                    ) >= 4 ||
                                    c.test(Z) ||
                                    e.test(Z) ||
                                    d.test(Z)
                                )
                                    break;
                                s += "\n" + n;
                            }
                            (b = !n.trim()), (i += u + "\n"), (l = l.substring(u.length + 1)), (Z = h.slice(m));
                        }
                    }
                    c.loose || (a ? (c.loose = !0) : this.rules.other.doubleBlankLine.test(i) && (a = !0)),
                        c.items.push({
                            type: "list_item",
                            raw: i,
                            task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
                            loose: !1,
                            text: s,
                            tokens: [],
                        }),
                        (c.raw += i);
                }
                let s = c.items.at(-1);
                if (!s) return;
                for (let l of ((s.raw = s.raw.trimEnd()),
                (s.text = s.text.trimEnd()),
                (c.raw = c.raw.trimEnd()),
                c.items)) {
                    if (((this.lexer.state.top = !1), (l.tokens = this.lexer.blockTokens(l.text, [])), l.task)) {
                        if (
                            ((l.text = l.text.replace(this.rules.other.listReplaceTask, "")),
                            l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph")
                        ) {
                            (l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, "")),
                                (l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, ""));
                            for (let l = this.lexer.inlineQueue.length - 1; l >= 0; l--)
                                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[l].src)) {
                                    this.lexer.inlineQueue[l].src = this.lexer.inlineQueue[l].src.replace(
                                        this.rules.other.listReplaceTask,
                                        "",
                                    );
                                    break;
                                }
                        }
                        let t = this.rules.other.listTaskCheckbox.exec(l.raw);
                        if (t) {
                            let d = { type: "checkbox", raw: t[0] + " ", checked: "[ ]" !== t[0] };
                            (l.checked = d.checked),
                                c.loose
                                    ? l.tokens[0] &&
                                      ["paragraph", "text"].includes(l.tokens[0].type) &&
                                      "tokens" in l.tokens[0] &&
                                      l.tokens[0].tokens
                                        ? ((l.tokens[0].raw = d.raw + l.tokens[0].raw),
                                          (l.tokens[0].text = d.raw + l.tokens[0].text),
                                          l.tokens[0].tokens.unshift(d))
                                        : l.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] })
                                    : l.tokens.unshift(d);
                        }
                    }
                    if (!c.loose) {
                        let t = l.tokens.filter((l) => "space" === l.type);
                        c.loose = t.length > 0 && t.some((l) => this.rules.other.anyLine.test(l.raw));
                    }
                }
                if (c.loose)
                    for (let l of c.items)
                        for (let t of ((l.loose = !0), l.tokens)) "text" === t.type && (t.type = "paragraph");
                return c;
            }
        }
        html(l) {
            let t = this.rules.block.html.exec(l);
            if (t)
                return {
                    type: "html",
                    block: !0,
                    raw: t[0],
                    pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                    text: t[0],
                };
        }
        def(l) {
            let t = this.rules.block.def.exec(l);
            if (t) {
                let l = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                    d = t[2]
                        ? t[2]
                              .replace(this.rules.other.hrefBrackets, "$1")
                              .replace(this.rules.inline.anyPunctuation, "$1")
                        : "",
                    i = t[3]
                        ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1")
                        : t[3];
                return { type: "def", tag: l, raw: t[0], href: d, title: i };
            }
        }
        table(l) {
            let t = this.rules.block.table.exec(l);
            if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
            let d = tl(t[1]),
                i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                c = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [],
                e = { type: "table", raw: t[0], header: [], align: [], rows: [] };
            if (d.length === i.length) {
                for (let l of i)
                    this.rules.other.tableAlignRight.test(l)
                        ? e.align.push("right")
                        : this.rules.other.tableAlignCenter.test(l)
                          ? e.align.push("center")
                          : this.rules.other.tableAlignLeft.test(l)
                            ? e.align.push("left")
                            : e.align.push(null);
                for (let l = 0; l < d.length; l++)
                    e.header.push({ text: d[l], tokens: this.lexer.inline(d[l]), header: !0, align: e.align[l] });
                for (let l of c)
                    e.rows.push(
                        tl(l, e.header.length).map((l, t) => ({
                            text: l,
                            tokens: this.lexer.inline(l),
                            header: !1,
                            align: e.align[t],
                        })),
                    );
                return e;
            }
        }
        lheading(l) {
            let t = this.rules.block.lheading.exec(l);
            if (t) {
                let l = t[1].trim();
                return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: l,
                    tokens: this.lexer.inline(l),
                };
            }
        }
        paragraph(l) {
            let t = this.rules.block.paragraph.exec(l);
            if (t) {
                let l = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                return { type: "paragraph", raw: t[0], text: l, tokens: this.lexer.inline(l) };
            }
        }
        text(l) {
            let t = this.rules.block.text.exec(l);
            if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
        }
        escape(l) {
            let t = this.rules.inline.escape.exec(l);
            if (t) return { type: "escape", raw: t[0], text: t[1] };
        }
        tag(l) {
            let t = this.rules.inline.tag.exec(l);
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
        link(l) {
            let t = this.rules.inline.link.exec(l);
            if (t) {
                let l = t[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(l)) {
                    if (!this.rules.other.endAngleBracket.test(l)) return;
                    let t = tt(l.slice(0, -1), "\\");
                    if ((l.length - t.length) % 2 == 0) return;
                } else {
                    let l = (function (l) {
                        if (-1 === l.indexOf(")")) return -1;
                        let t = 0;
                        for (let d = 0; d < l.length; d++)
                            if ("\\" === l[d]) d++;
                            else if ("(" === l[d]) t++;
                            else if (")" === l[d] && --t < 0) return d;
                        return t > 0 ? -2 : -1;
                    })(t[2]);
                    if (-2 === l) return;
                    if (l > -1) {
                        let d = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + l;
                        (t[2] = t[2].substring(0, l)), (t[0] = t[0].substring(0, d).trim()), (t[3] = "");
                    }
                }
                let d = t[2],
                    i = "";
                if (this.options.pedantic) {
                    let l = this.rules.other.pedanticHrefTitle.exec(d);
                    l && ((d = l[1]), (i = l[3]));
                } else i = t[3] ? t[3].slice(1, -1) : "";
                return (
                    (d = d.trim()),
                    this.rules.other.startAngleBracket.test(d) &&
                        (d =
                            this.options.pedantic && !this.rules.other.endAngleBracket.test(l)
                                ? d.slice(1)
                                : d.slice(1, -1)),
                    td(
                        t,
                        {
                            href: d && d.replace(this.rules.inline.anyPunctuation, "$1"),
                            title: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
                        },
                        t[0],
                        this.lexer,
                        this.rules,
                    )
                );
            }
        }
        reflink(l, t) {
            let d;
            if ((d = this.rules.inline.reflink.exec(l)) || (d = this.rules.inline.nolink.exec(l))) {
                let l = t[(d[2] || d[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
                if (!l) {
                    let l = d[0].charAt(0);
                    return { type: "text", raw: l, text: l };
                }
                return td(d, l, d[0], this.lexer, this.rules);
            }
        }
        emStrong(l, t, d = "") {
            let i = this.rules.inline.emStrongLDelim.exec(l);
            if (
                !(
                    !i ||
                    (!i[1] && !i[2] && !i[3] && !i[4]) ||
                    (i[4] && d.match(this.rules.other.unicodeAlphaNumeric))
                ) &&
                (!(i[1] || i[3]) || !d || this.rules.inline.punctuation.exec(d))
            ) {
                let d = [...i[0]].length - 1,
                    c,
                    e,
                    a = d,
                    s = 0,
                    Z = "*" === i[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (Z.lastIndex = 0, t = t.slice(-1 * l.length + d); null != (i = Z.exec(t)); ) {
                    if (!(c = i[1] || i[2] || i[3] || i[4] || i[5] || i[6])) continue;
                    if (((e = [...c].length), i[3] || i[4])) {
                        a += e;
                        continue;
                    }
                    if ((i[5] || i[6]) && d % 3 && !((d + e) % 3)) {
                        s += e;
                        continue;
                    }
                    if ((a -= e) > 0) continue;
                    e = Math.min(e, e + a + s);
                    let t = [...i[0]][0].length,
                        Z = l.slice(0, d + i.index + t + e);
                    if (Math.min(d, e) % 2) {
                        let l = Z.slice(1, -1);
                        return { type: "em", raw: Z, text: l, tokens: this.lexer.inlineTokens(l) };
                    }
                    let n = Z.slice(2, -2);
                    return { type: "strong", raw: Z, text: n, tokens: this.lexer.inlineTokens(n) };
                }
            }
        }
        codespan(l) {
            let t = this.rules.inline.code.exec(l);
            if (t) {
                let l = t[2].replace(this.rules.other.newLineCharGlobal, " "),
                    d = this.rules.other.nonSpaceChar.test(l),
                    i = this.rules.other.startingSpaceChar.test(l) && this.rules.other.endingSpaceChar.test(l);
                return d && i && (l = l.substring(1, l.length - 1)), { type: "codespan", raw: t[0], text: l };
            }
        }
        br(l) {
            let t = this.rules.inline.br.exec(l);
            if (t) return { type: "br", raw: t[0] };
        }
        del(l, t, d = "") {
            let i = this.rules.inline.delLDelim.exec(l);
            if (i && (!i[1] || !d || this.rules.inline.punctuation.exec(d))) {
                let d = [...i[0]].length - 1,
                    c,
                    e,
                    a = d,
                    s = this.rules.inline.delRDelim;
                for (s.lastIndex = 0, t = t.slice(-1 * l.length + d); null != (i = s.exec(t)); ) {
                    if (!(c = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]) || (e = [...c].length) !== d) continue;
                    if (i[3] || i[4]) {
                        a += e;
                        continue;
                    }
                    if ((a -= e) > 0) continue;
                    e = Math.min(e, e + a);
                    let t = [...i[0]][0].length,
                        s = l.slice(0, d + i.index + t + e),
                        Z = s.slice(d, -d);
                    return { type: "del", raw: s, text: Z, tokens: this.lexer.inlineTokens(Z) };
                }
            }
        }
        autolink(l) {
            let t = this.rules.inline.autolink.exec(l);
            if (t) {
                let l, d;
                return (
                    (d = "@" === t[2] ? "mailto:" + (l = t[1]) : (l = t[1])),
                    { type: "link", raw: t[0], text: l, href: d, tokens: [{ type: "text", raw: l, text: l }] }
                );
            }
        }
        url(l) {
            let t;
            if ((t = this.rules.inline.url.exec(l))) {
                let l, d;
                if ("@" === t[2]) d = "mailto:" + (l = t[0]);
                else {
                    let i;
                    do (i = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
                    while (i !== t[0]);
                    (l = t[0]), (d = "www." === t[1] ? "http://" + t[0] : t[0]);
                }
                return { type: "link", raw: t[0], text: l, href: d, tokens: [{ type: "text", raw: l, text: l }] };
            }
        }
        inlineText(l) {
            let t = this.rules.inline.text.exec(l);
            if (t) {
                let l = this.lexer.state.inRawBlock;
                return { type: "text", raw: t[0], text: t[0], escaped: l };
            }
        }
    },
    tc = class l {
        constructor(l) {
            (0, c.t)(this, "tokens", void 0),
                (0, c.t)(this, "options", void 0),
                (0, c.t)(this, "state", void 0),
                (0, c.t)(this, "inlineQueue", void 0),
                (0, c.t)(this, "tokenizer", void 0),
                (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = l || la),
                (this.options.tokenizer = this.options.tokenizer || new ti()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
            let t = { other: lb, block: l3.normal, inline: l9.normal };
            this.options.pedantic
                ? ((t.block = l3.pedantic), (t.inline = l9.pedantic))
                : this.options.gfm &&
                  ((t.block = l3.gfm), this.options.breaks ? (t.inline = l9.breaks) : (t.inline = l9.gfm)),
                (this.tokenizer.rules = t);
        }
        static get rules() {
            return { block: l3, inline: l9 };
        }
        static lex(t, d) {
            return new l(d).lex(t);
        }
        static lexInline(t, d) {
            return new l(d).inlineTokens(t);
        }
        lex(l) {
            (l = l.replace(lb.carriageReturn, "\n")), this.blockTokens(l, this.tokens);
            for (let l = 0; l < this.inlineQueue.length; l++) {
                let t = this.inlineQueue[l];
                this.inlineTokens(t.src, t.tokens);
            }
            return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(l, t = [], d = !1) {
            for (
                this.tokenizer.lexer = this,
                    this.options.pedantic && (l = l.replace(lb.tabCharGlobal, "    ").replace(lb.spaceLine, ""));
                l;
            ) {
                let i;
                if (
                    this.options.extensions?.block?.some(
                        (d) =>
                            !!(i = d.call({ lexer: this }, l, t)) && ((l = l.substring(i.raw.length)), t.push(i), !0),
                    )
                )
                    continue;
                if ((i = this.tokenizer.space(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    1 === i.raw.length && void 0 !== d ? (d.raw += "\n") : t.push(i);
                    continue;
                }
                if ((i = this.tokenizer.code(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "paragraph" || d?.type === "text"
                        ? ((d.raw += (d.raw.endsWith("\n") ? "" : "\n") + i.raw),
                          (d.text += "\n" + i.text),
                          (this.inlineQueue.at(-1).src = d.text))
                        : t.push(i);
                    continue;
                }
                if (
                    (i = this.tokenizer.fences(l)) ||
                    (i = this.tokenizer.heading(l)) ||
                    (i = this.tokenizer.hr(l)) ||
                    (i = this.tokenizer.blockquote(l)) ||
                    (i = this.tokenizer.list(l)) ||
                    (i = this.tokenizer.html(l))
                ) {
                    (l = l.substring(i.raw.length)), t.push(i);
                    continue;
                }
                if ((i = this.tokenizer.def(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "paragraph" || d?.type === "text"
                        ? ((d.raw += (d.raw.endsWith("\n") ? "" : "\n") + i.raw),
                          (d.text += "\n" + i.raw),
                          (this.inlineQueue.at(-1).src = d.text))
                        : this.tokens.links[i.tag] ||
                          ((this.tokens.links[i.tag] = { href: i.href, title: i.title }), t.push(i));
                    continue;
                }
                if ((i = this.tokenizer.table(l)) || (i = this.tokenizer.lheading(l))) {
                    (l = l.substring(i.raw.length)), t.push(i);
                    continue;
                }
                let c = l;
                if (this.options.extensions?.startBlock) {
                    let t = 1 / 0,
                        d = l.slice(1),
                        i;
                    this.options.extensions.startBlock.forEach((l) => {
                        "number" == typeof (i = l.call({ lexer: this }, d)) && i >= 0 && (t = Math.min(t, i));
                    }),
                        t < 1 / 0 && t >= 0 && (c = l.substring(0, t + 1));
                }
                if (this.state.top && (i = this.tokenizer.paragraph(c))) {
                    let e = t.at(-1);
                    d && e?.type === "paragraph"
                        ? ((e.raw += (e.raw.endsWith("\n") ? "" : "\n") + i.raw),
                          (e.text += "\n" + i.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = e.text))
                        : t.push(i),
                        (d = c.length !== l.length),
                        (l = l.substring(i.raw.length));
                    continue;
                }
                if ((i = this.tokenizer.text(l))) {
                    l = l.substring(i.raw.length);
                    let d = t.at(-1);
                    d?.type === "text"
                        ? ((d.raw += (d.raw.endsWith("\n") ? "" : "\n") + i.raw),
                          (d.text += "\n" + i.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = d.text))
                        : t.push(i);
                    continue;
                }
                if (l) {
                    let t = "Infinite loop on byte: " + l.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(t);
                        break;
                    }
                    throw Error(t);
                }
            }
            return (this.state.top = !0), t;
        }
        inline(l, t = []) {
            return this.inlineQueue.push({ src: l, tokens: t }), t;
        }
        inlineTokens(l, t = []) {
            let d;
            this.tokenizer.lexer = this;
            let i = l,
                c = null;
            if (this.tokens.links) {
                let l = Object.keys(this.tokens.links);
                if (l.length > 0)
                    for (; null != (c = this.tokenizer.rules.inline.reflinkSearch.exec(i)); )
                        l.includes(c[0].slice(c[0].lastIndexOf("[") + 1, -1)) &&
                            (i =
                                i.slice(0, c.index) +
                                "[" +
                                "a".repeat(c[0].length - 2) +
                                "]" +
                                i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (c = this.tokenizer.rules.inline.anyPunctuation.exec(i)); )
                i = i.slice(0, c.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (; null != (c = this.tokenizer.rules.inline.blockSkip.exec(i)); )
                (d = c[2] ? c[2].length : 0),
                    (i =
                        i.slice(0, c.index + d) +
                        "[" +
                        "a".repeat(c[0].length - d - 2) +
                        "]" +
                        i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex));
            i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
            let e = !1,
                a = "";
            for (; l; ) {
                let d;
                if (
                    (e || (a = ""),
                    (e = !1),
                    this.options.extensions?.inline?.some(
                        (i) =>
                            !!(d = i.call({ lexer: this }, l, t)) && ((l = l.substring(d.raw.length)), t.push(d), !0),
                    ))
                )
                    continue;
                if ((d = this.tokenizer.escape(l)) || (d = this.tokenizer.tag(l)) || (d = this.tokenizer.link(l))) {
                    (l = l.substring(d.raw.length)), t.push(d);
                    continue;
                }
                if ((d = this.tokenizer.reflink(l, this.tokens.links))) {
                    l = l.substring(d.raw.length);
                    let i = t.at(-1);
                    "text" === d.type && i?.type === "text" ? ((i.raw += d.raw), (i.text += d.text)) : t.push(d);
                    continue;
                }
                if (
                    (d = this.tokenizer.emStrong(l, i, a)) ||
                    (d = this.tokenizer.codespan(l)) ||
                    (d = this.tokenizer.br(l)) ||
                    (d = this.tokenizer.del(l, i, a)) ||
                    (d = this.tokenizer.autolink(l)) ||
                    (!this.state.inLink && (d = this.tokenizer.url(l)))
                ) {
                    (l = l.substring(d.raw.length)), t.push(d);
                    continue;
                }
                let c = l;
                if (this.options.extensions?.startInline) {
                    let t = 1 / 0,
                        d = l.slice(1),
                        i;
                    this.options.extensions.startInline.forEach((l) => {
                        "number" == typeof (i = l.call({ lexer: this }, d)) && i >= 0 && (t = Math.min(t, i));
                    }),
                        t < 1 / 0 && t >= 0 && (c = l.substring(0, t + 1));
                }
                if ((d = this.tokenizer.inlineText(c))) {
                    (l = l.substring(d.raw.length)), "_" !== d.raw.slice(-1) && (a = d.raw.slice(-1)), (e = !0);
                    let i = t.at(-1);
                    i?.type === "text" ? ((i.raw += d.raw), (i.text += d.text)) : t.push(d);
                    continue;
                }
                if (l) {
                    let t = "Infinite loop on byte: " + l.charCodeAt(0);
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
    te = class {
        constructor(l) {
            (0, c.t)(this, "options", void 0), (0, c.t)(this, "parser", void 0), (this.options = l || la);
        }
        space(l) {
            return "";
        }
        code({ text: l, lang: t, escaped: d }) {
            let i = (t || "").match(lb.notSpaceStart)?.[0],
                c = l.replace(lb.endingNewline, "") + "\n";
            return i
                ? '<pre><code class="language-' + l6(i) + '">' + (d ? c : l6(c, !0)) + "</code></pre>\n"
                : "<pre><code>" + (d ? c : l6(c, !0)) + "</code></pre>\n";
        }
        blockquote({ tokens: l }) {
            return `<blockquote>
${this.parser.parse(l)}</blockquote>
`;
        }
        html({ text: l }) {
            return l;
        }
        def(l) {
            return "";
        }
        heading({ tokens: l, depth: t }) {
            return `<h${t}>${this.parser.parseInline(l)}</h${t}>
`;
        }
        hr(l) {
            return "<hr>\n";
        }
        list(l) {
            let t = l.ordered,
                d = l.start,
                i = "";
            for (let t = 0; t < l.items.length; t++) {
                let d = l.items[t];
                i += this.listitem(d);
            }
            let c = t ? "ol" : "ul";
            return "<" + c + (t && 1 !== d ? ' start="' + d + '"' : "") + ">\n" + i + "</" + c + ">\n";
        }
        listitem(l) {
            return `<li>${this.parser.parse(l.tokens)}</li>
`;
        }
        checkbox({ checked: l }) {
            return "<input " + (l ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
        }
        paragraph({ tokens: l }) {
            return `<p>${this.parser.parseInline(l)}</p>
`;
        }
        table(l) {
            let t = "",
                d = "";
            for (let t = 0; t < l.header.length; t++) d += this.tablecell(l.header[t]);
            t += this.tablerow({ text: d });
            let i = "";
            for (let t = 0; t < l.rows.length; t++) {
                let c = l.rows[t];
                d = "";
                for (let l = 0; l < c.length; l++) d += this.tablecell(c[l]);
                i += this.tablerow({ text: d });
            }
            return "<table>\n<thead>\n" + t + "</thead>\n" + (i &&= `<tbody>${i}</tbody>`) + "</table>\n";
        }
        tablerow({ text: l }) {
            return `<tr>
${l}</tr>
`;
        }
        tablecell(l) {
            let t = this.parser.parseInline(l.tokens),
                d = l.header ? "th" : "td";
            return (
                (l.align ? `<${d} align="${l.align}">` : `<${d}>`) +
                t +
                `</${d}>
`
            );
        }
        strong({ tokens: l }) {
            return `<strong>${this.parser.parseInline(l)}</strong>`;
        }
        em({ tokens: l }) {
            return `<em>${this.parser.parseInline(l)}</em>`;
        }
        codespan({ text: l }) {
            return `<code>${l6(l, !0)}</code>`;
        }
        br(l) {
            return "<br>";
        }
        del({ tokens: l }) {
            return `<del>${this.parser.parseInline(l)}</del>`;
        }
        link({ href: l, title: t, tokens: d }) {
            let i = this.parser.parseInline(d),
                c = l8(l);
            if (null === c) return i;
            let e = '<a href="' + (l = c) + '"';
            return t && (e += ' title="' + l6(t) + '"'), (e += ">" + i + "</a>");
        }
        image({ href: l, title: t, text: d, tokens: i }) {
            i && (d = this.parser.parseInline(i, this.parser.textRenderer));
            let c = l8(l);
            if (null === c) return l6(d);
            l = c;
            let e = `<img src="${l}" alt="${l6(d)}"`;
            return t && (e += ` title="${l6(t)}"`), (e += ">");
        }
        text(l) {
            return "tokens" in l && l.tokens
                ? this.parser.parseInline(l.tokens)
                : "escaped" in l && l.escaped
                  ? l.text
                  : l6(l.text);
        }
    },
    ta = class {
        strong({ text: l }) {
            return l;
        }
        em({ text: l }) {
            return l;
        }
        codespan({ text: l }) {
            return l;
        }
        del({ text: l }) {
            return l;
        }
        html({ text: l }) {
            return l;
        }
        text({ text: l }) {
            return l;
        }
        link({ text: l }) {
            return "" + l;
        }
        image({ text: l }) {
            return "" + l;
        }
        br() {
            return "";
        }
        checkbox({ raw: l }) {
            return l;
        }
    },
    ts = class l {
        constructor(l) {
            (0, c.t)(this, "options", void 0),
                (0, c.t)(this, "renderer", void 0),
                (0, c.t)(this, "textRenderer", void 0),
                (this.options = l || la),
                (this.options.renderer = this.options.renderer || new te()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new ta());
        }
        static parse(t, d) {
            return new l(d).parse(t);
        }
        static parseInline(t, d) {
            return new l(d).parseInline(t);
        }
        parse(l) {
            this.renderer.parser = this;
            let t = "";
            for (let d = 0; d < l.length; d++) {
                let i = l[d];
                if (this.options.extensions?.renderers?.[i.type]) {
                    let l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
                    if (
                        !1 !== l ||
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
                        ].includes(i.type)
                    ) {
                        t += l || "";
                        continue;
                    }
                }
                switch (i.type) {
                    case "space":
                        t += this.renderer.space(i);
                        break;
                    case "hr":
                        t += this.renderer.hr(i);
                        break;
                    case "heading":
                        t += this.renderer.heading(i);
                        break;
                    case "code":
                        t += this.renderer.code(i);
                        break;
                    case "table":
                        t += this.renderer.table(i);
                        break;
                    case "blockquote":
                        t += this.renderer.blockquote(i);
                        break;
                    case "list":
                        t += this.renderer.list(i);
                        break;
                    case "checkbox":
                        t += this.renderer.checkbox(i);
                        break;
                    case "html":
                        t += this.renderer.html(i);
                        break;
                    case "def":
                        t += this.renderer.def(i);
                        break;
                    case "paragraph":
                        t += this.renderer.paragraph(i);
                        break;
                    case "text":
                        t += this.renderer.text(i);
                        break;
                    default: {
                        let l = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw Error(l);
                    }
                }
            }
            return t;
        }
        parseInline(l, t = this.renderer) {
            this.renderer.parser = this;
            let d = "";
            for (let i = 0; i < l.length; i++) {
                let c = l[i];
                if (this.options.extensions?.renderers?.[c.type]) {
                    let l = this.options.extensions.renderers[c.type].call({ parser: this }, c);
                    if (
                        !1 !== l ||
                        !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(
                            c.type,
                        )
                    ) {
                        d += l || "";
                        continue;
                    }
                }
                switch (c.type) {
                    case "escape":
                    case "text":
                        d += t.text(c);
                        break;
                    case "html":
                        d += t.html(c);
                        break;
                    case "link":
                        d += t.link(c);
                        break;
                    case "image":
                        d += t.image(c);
                        break;
                    case "checkbox":
                        d += t.checkbox(c);
                        break;
                    case "strong":
                        d += t.strong(c);
                        break;
                    case "em":
                        d += t.em(c);
                        break;
                    case "codespan":
                        d += t.codespan(c);
                        break;
                    case "br":
                        d += t.br(c);
                        break;
                    case "del":
                        d += t.del(c);
                        break;
                    default: {
                        let l = 'Token with "' + c.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw Error(l);
                    }
                }
            }
            return d;
        }
    },
    tZ =
        ((g = class {
            constructor(l) {
                (0, c.t)(this, "options", void 0), (0, c.t)(this, "block", void 0), (this.options = l || la);
            }
            preprocess(l) {
                return l;
            }
            postprocess(l) {
                return l;
            }
            processAllTokens(l) {
                return l;
            }
            emStrongMask(l) {
                return l;
            }
            provideLexer() {
                return this.block ? tc.lex : tc.lexInline;
            }
            provideParser() {
                return this.block ? ts.parse : ts.parseInline;
            }
        }),
        (0, c.t)(g, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])),
        (0, c.t)(g, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])),
        g),
    tn = new (class {
        constructor(...l) {
            (0, c.t)(this, "defaults", le()),
                (0, c.t)(this, "options", this.setOptions),
                (0, c.t)(this, "parse", this.parseMarkdown(!0)),
                (0, c.t)(this, "parseInline", this.parseMarkdown(!1)),
                (0, c.t)(this, "Parser", ts),
                (0, c.t)(this, "Renderer", te),
                (0, c.t)(this, "TextRenderer", ta),
                (0, c.t)(this, "Lexer", tc),
                (0, c.t)(this, "Tokenizer", ti),
                (0, c.t)(this, "Hooks", tZ),
                this.use(...l);
        }
        walkTokens(l, t) {
            let d = [];
            for (let i of l)
                switch (((d = d.concat(t.call(this, i))), i.type)) {
                    case "table":
                        for (let l of i.header) d = d.concat(this.walkTokens(l.tokens, t));
                        for (let l of i.rows) for (let i of l) d = d.concat(this.walkTokens(i.tokens, t));
                        break;
                    case "list":
                        d = d.concat(this.walkTokens(i.items, t));
                        break;
                    default: {
                        let l = i;
                        this.defaults.extensions?.childTokens?.[l.type]
                            ? this.defaults.extensions.childTokens[l.type].forEach((i) => {
                                  let c = l[i].flat(1 / 0);
                                  d = d.concat(this.walkTokens(c, t));
                              })
                            : l.tokens && (d = d.concat(this.walkTokens(l.tokens, t)));
                    }
                }
            return d;
        }
        use(...l) {
            let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
            return (
                l.forEach((l) => {
                    let d = { ...l };
                    if (
                        ((d.async = this.defaults.async || d.async || !1),
                        l.extensions &&
                            (l.extensions.forEach((l) => {
                                if (!l.name) throw Error("extension name required");
                                if ("renderer" in l) {
                                    let d = t.renderers[l.name];
                                    d
                                        ? (t.renderers[l.name] = function (...t) {
                                              let i = l.renderer.apply(this, t);
                                              return !1 === i && (i = d.apply(this, t)), i;
                                          })
                                        : (t.renderers[l.name] = l.renderer);
                                }
                                if ("tokenizer" in l) {
                                    if (!l.level || ("block" !== l.level && "inline" !== l.level))
                                        throw Error("extension level must be 'block' or 'inline'");
                                    let d = t[l.level];
                                    d ? d.unshift(l.tokenizer) : (t[l.level] = [l.tokenizer]),
                                        l.start &&
                                            ("block" === l.level
                                                ? t.startBlock
                                                    ? t.startBlock.push(l.start)
                                                    : (t.startBlock = [l.start])
                                                : "inline" === l.level &&
                                                  (t.startInline
                                                      ? t.startInline.push(l.start)
                                                      : (t.startInline = [l.start])));
                                }
                                "childTokens" in l && l.childTokens && (t.childTokens[l.name] = l.childTokens);
                            }),
                            (d.extensions = t)),
                        l.renderer)
                    ) {
                        let t = this.defaults.renderer || new te(this.defaults);
                        for (let d in l.renderer) {
                            if (!(d in t)) throw Error(`renderer '${d}' does not exist`);
                            if (["options", "parser"].includes(d)) continue;
                            let i = l.renderer[d],
                                c = t[d];
                            t[d] = (...l) => {
                                let d = i.apply(t, l);
                                return !1 === d && (d = c.apply(t, l)), d || "";
                            };
                        }
                        d.renderer = t;
                    }
                    if (l.tokenizer) {
                        let t = this.defaults.tokenizer || new ti(this.defaults);
                        for (let d in l.tokenizer) {
                            if (!(d in t)) throw Error(`tokenizer '${d}' does not exist`);
                            if (["options", "rules", "lexer"].includes(d)) continue;
                            let i = l.tokenizer[d],
                                c = t[d];
                            t[d] = (...l) => {
                                let d = i.apply(t, l);
                                return !1 === d && (d = c.apply(t, l)), d;
                            };
                        }
                        d.tokenizer = t;
                    }
                    if (l.hooks) {
                        let t = this.defaults.hooks || new tZ();
                        for (let d in l.hooks) {
                            if (!(d in t)) throw Error(`hook '${d}' does not exist`);
                            if (["options", "block"].includes(d)) continue;
                            let i = l.hooks[d],
                                c = t[d];
                            tZ.passThroughHooks.has(d)
                                ? (t[d] = (l) => {
                                      if (this.defaults.async && tZ.passThroughHooksRespectAsync.has(d))
                                          return (async () => {
                                              let d = await i.call(t, l);
                                              return c.call(t, d);
                                          })();
                                      let e = i.call(t, l);
                                      return c.call(t, e);
                                  })
                                : (t[d] = (...l) => {
                                      if (this.defaults.async)
                                          return (async () => {
                                              let d = await i.apply(t, l);
                                              return !1 === d && (d = await c.apply(t, l)), d;
                                          })();
                                      let d = i.apply(t, l);
                                      return !1 === d && (d = c.apply(t, l)), d;
                                  });
                        }
                        d.hooks = t;
                    }
                    if (l.walkTokens) {
                        let t = this.defaults.walkTokens,
                            i = l.walkTokens;
                        d.walkTokens = function (l) {
                            let d = [];
                            return d.push(i.call(this, l)), t && (d = d.concat(t.call(this, l))), d;
                        };
                    }
                    this.defaults = { ...this.defaults, ...d };
                }),
                this
            );
        }
        setOptions(l) {
            return (this.defaults = { ...this.defaults, ...l }), this;
        }
        lexer(l, t) {
            return tc.lex(l, t ?? this.defaults);
        }
        parser(l, t) {
            return ts.parse(l, t ?? this.defaults);
        }
        parseMarkdown(l) {
            return (t, d) => {
                let i = { ...d },
                    c = { ...this.defaults, ...i },
                    e = this.onError(!!c.silent, !!c.async);
                if (!0 === this.defaults.async && !1 === i.async)
                    return e(
                        Error(
                            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                        ),
                    );
                if (typeof t > "u" || null === t) return e(Error("marked(): input parameter is undefined or null"));
                if ("string" != typeof t)
                    return e(
                        Error(
                            "marked(): input parameter is of type " +
                                Object.prototype.toString.call(t) +
                                ", string expected",
                        ),
                    );
                if ((c.hooks && ((c.hooks.options = c), (c.hooks.block = l)), c.async))
                    return (async () => {
                        let d = c.hooks ? await c.hooks.preprocess(t) : t,
                            i = await (c.hooks ? await c.hooks.provideLexer() : l ? tc.lex : tc.lexInline)(d, c),
                            e = c.hooks ? await c.hooks.processAllTokens(i) : i;
                        c.walkTokens && (await Promise.all(this.walkTokens(e, c.walkTokens)));
                        let a = await (c.hooks ? await c.hooks.provideParser() : l ? ts.parse : ts.parseInline)(e, c);
                        return c.hooks ? await c.hooks.postprocess(a) : a;
                    })().catch(e);
                try {
                    c.hooks && (t = c.hooks.preprocess(t));
                    let d = (c.hooks ? c.hooks.provideLexer() : l ? tc.lex : tc.lexInline)(t, c);
                    c.hooks && (d = c.hooks.processAllTokens(d)), c.walkTokens && this.walkTokens(d, c.walkTokens);
                    let i = (c.hooks ? c.hooks.provideParser() : l ? ts.parse : ts.parseInline)(d, c);
                    return c.hooks && (i = c.hooks.postprocess(i)), i;
                } catch (l) {
                    return e(l);
                }
            };
        }
        onError(l, t) {
            return (d) => {
                if (((d.message += "\nPlease report this to https://github.com/markedjs/marked."), l)) {
                    let l = "<p>An error occurred:</p><pre>" + l6(d.message + "", !0) + "</pre>";
                    return t ? Promise.resolve(l) : l;
                }
                if (t) return Promise.reject(d);
                throw d;
            };
        }
    })();
function tb(l, t) {
    return tn.parse(l, t);
}
function tm({ content: l, class: t, disallowedTags: d = [] }) {
    return l
        ? (0, i.v)("div", {
              class: t,
              children: (0, i.v)(i.t, {
                  markup: (function (l, t) {
                      let d = l.replace(/([^\s>])(<a\b)/gu, "$1\xa0$2").replace(/(<\/a>)([\p{L}\p{N}])/gu, "$1\xa0$2"),
                          i = tb.parse(d);
                      var c = lc.sanitize(i, { FORBID_TAGS: t });
                      let e = new DOMParser().parseFromString(c, "text/html");
                      for (let l of e.querySelectorAll("a"))
                          l.setAttribute("target", "_blank"), l.setAttribute("rel", "noopener noreferrer");
                      return e.body.innerHTML;
                  })(l, d),
                  type: "html",
                  trim: !1,
              }),
          })
        : null;
}
(tb.options = tb.setOptions =
    function (l) {
        return tn.setOptions(l), (tb.defaults = tn.defaults), (la = tb.defaults), tb;
    }),
    (tb.getDefaults = le),
    (tb.defaults = la),
    (tb.use = function (...l) {
        return tn.use(...l), (tb.defaults = tn.defaults), (la = tb.defaults), tb;
    }),
    (tb.walkTokens = function (l, t) {
        return tn.walkTokens(l, t);
    }),
    (tb.parseInline = tn.parseInline),
    (tb.Parser = ts),
    (tb.parser = ts.parse),
    (tb.Renderer = te),
    (tb.TextRenderer = ta),
    (tb.Lexer = tc),
    (tb.lexer = tc.lex),
    (tb.Tokenizer = ti),
    (tb.Hooks = tZ),
    (tb.parse = tb),
    tb.options,
    tb.setOptions,
    tb.use,
    tb.walkTokens,
    tb.parseInline,
    ts.parse,
    tc.lex;
