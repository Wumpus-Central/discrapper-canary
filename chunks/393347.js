n.d(t, {
        Cp: () => f,
        RR: () => c,
        X5: () => l,
        cv: () => m,
        dp: () => b,
        dr: () => E,
        oo: () => a,
        uY: () => g
    });
    var r = n(119576);
    function i(e, t, n) {
        let i, {
                reference: a,
                floating: o
            } = e, s = (0, r.Qq)(t), l = (0, r.Wh)(t), c = (0, r.I4)(l), u = (0, r.k3)(t), d = 'y' === s, f = a.x + a.width / 2 - o.width / 2, _ = a.y + a.height / 2 - o.height / 2, p = a[c] / 2 - o[c] / 2;
        switch (u) {
        case 'top':
            i = {
                x: f,
                y: a.y - o.height
            };
            break;
        case 'bottom':
            i = {
                x: f,
                y: a.y + a.height
            };
            break;
        case 'right':
            i = {
                x: a.x + a.width,
                y: _
            };
            break;
        case 'left':
            i = {
                x: a.x - o.width,
                y: _
            };
            break;
        default:
            i = {
                x: a.x,
                y: a.y
            };
        }
        switch ((0, r.hp)(t)) {
        case 'start':
            i[l] -= p * (n && d ? -1 : 1);
            break;
        case 'end':
            i[l] += p * (n && d ? -1 : 1);
        }
        return i;
    }
    let a = async (e, t, n) => {
        let {
                placement: r = 'bottom',
                strategy: a = 'absolute',
                middleware: o = [],
                platform: s
            } = n, l = o.filter(Boolean), c = await (null == s.isRTL ? void 0 : s.isRTL(t)), u = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: a
            }), {
                x: d,
                y: f
            } = i(u, r, c), _ = r, p = {}, h = 0;
        for (let n = 0; n < l.length; n++) {
            let {
                    name: o,
                    fn: m
                } = l[n], {
                    x: g,
                    y: E,
                    data: b,
                    reset: y
                } = await m({
                    x: d,
                    y: f,
                    initialPlacement: r,
                    placement: _,
                    strategy: a,
                    middlewareData: p,
                    rects: u,
                    platform: s,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
            d = null != g ? g : d, f = null != E ? E : f, p = {
                ...p,
                [o]: {
                    ...p[o],
                    ...b
                }
            }, y && h <= 50 && (h++, 'object' == typeof y && (y.placement && (_ = y.placement), y.rects && (u = !0 === y.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: a
            }) : y.rects), {
                x: d,
                y: f
            } = i(u, _, c)), n = -1);
        }
        return {
            x: d,
            y: f,
            placement: _,
            strategy: a,
            middlewareData: p
        };
    };
    async function o(e, t) {
        var n;
        void 0 === t && (t = {});
        let {
                x: i,
                y: a,
                platform: o,
                rects: s,
                elements: l,
                strategy: c
            } = e, {
                boundary: u = 'clippingAncestors',
                rootBoundary: d = 'viewport',
                elementContext: f = 'floating',
                altBoundary: _ = !1,
                padding: p = 0
            } = (0, r.ku)(t, e), h = (0, r.yd)(p), m = 'floating' === f ? 'reference' : 'floating', g = l[_ ? m : f], E = (0, r.JB)(await o.getClippingRect({
                element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
                boundary: u,
                rootBoundary: d,
                strategy: c
            })), b = 'floating' === f ? {
                x: i,
                y: a,
                width: s.floating.width,
                height: s.floating.height
            } : s.reference, y = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), O = await (null == o.isElement ? void 0 : o.isElement(y)) && await (null == o.getScale ? void 0 : o.getScale(y)) || {
                x: 1,
                y: 1
            }, v = (0, r.JB)(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: l,
                rect: b,
                offsetParent: y,
                strategy: c
            }) : b);
        return {
            top: (E.top - v.top + h.top) / O.y,
            bottom: (v.bottom - E.bottom + h.bottom) / O.y,
            left: (E.left - v.left + h.left) / O.x,
            right: (v.right - E.right + h.right) / O.x
        };
    }
    function s(e, t, n) {
        return (e ? [
            ...n.filter(t => (0, r.hp)(t) === e),
            ...n.filter(t => (0, r.hp)(t) !== e)
        ] : n.filter(e => (0, r.k3)(e) === e)).filter(n => !e || (0, r.hp)(n) === e || !!t && (0, r.Go)(n) !== n);
    }
    let l = function (e) {
            return void 0 === e && (e = {}), {
                name: 'autoPlacement',
                options: e,
                async fn(t) {
                    var n, i, a;
                    let {
                            rects: l,
                            middlewareData: c,
                            placement: u,
                            platform: d,
                            elements: f
                        } = t, {
                            crossAxis: _ = !1,
                            alignment: p,
                            allowedPlacements: h = r.Ct,
                            autoAlignment: m = !0,
                            ...g
                        } = (0, r.ku)(e, t), E = void 0 !== p || h === r.Ct ? s(p || null, m, h) : h, b = await o(t, g), y = (null == (n = c.autoPlacement) ? void 0 : n.index) || 0, O = E[y];
                    if (null == O)
                        return {};
                    let v = (0, r.i8)(O, l, await (null == d.isRTL ? void 0 : d.isRTL(f.floating)));
                    if (u !== O)
                        return { reset: { placement: E[0] } };
                    let I = [
                            b[(0, r.k3)(O)],
                            b[v[0]],
                            b[v[1]]
                        ], T = [
                            ...(null == (i = c.autoPlacement) ? void 0 : i.overflows) || [],
                            {
                                placement: O,
                                overflows: I
                            }
                        ], S = E[y + 1];
                    if (S)
                        return {
                            data: {
                                index: y + 1,
                                overflows: T
                            },
                            reset: { placement: S }
                        };
                    let A = T.map(e => {
                            let t = (0, r.hp)(e.placement);
                            return [
                                e.placement,
                                t && _ ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                                e.overflows
                            ];
                        }).sort((e, t) => e[1] - t[1]), C = (null == (a = A.filter(e => e[2].slice(0, (0, r.hp)(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : a[0]) || A[0][0];
                    return C !== u ? {
                        data: {
                            index: y + 1,
                            overflows: T
                        },
                        reset: { placement: C }
                    } : {};
                }
            };
        }, c = function (e) {
            return void 0 === e && (e = {}), {
                name: 'flip',
                options: e,
                async fn(t) {
                    var n, i, a, s, l;
                    let {
                            placement: c,
                            middlewareData: u,
                            rects: d,
                            initialPlacement: f,
                            platform: _,
                            elements: p
                        } = t, {
                            mainAxis: h = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: E = 'bestFit',
                            fallbackAxisSideDirection: b = 'none',
                            flipAlignment: y = !0,
                            ...O
                        } = (0, r.ku)(e, t);
                    if (null != (n = u.arrow) && n.alignmentOffset)
                        return {};
                    let v = (0, r.k3)(c), I = (0, r.Qq)(f), T = (0, r.k3)(f) === f, S = await (null == _.isRTL ? void 0 : _.isRTL(p.floating)), A = g || (T || !y ? [(0, r.pw)(f)] : (0, r.gy)(f)), C = 'none' !== b;
                    !g && C && A.push(...(0, r.KX)(f, y, b, S));
                    let N = [
                            f,
                            ...A
                        ], R = await o(t, O), P = [], D = (null == (i = u.flip) ? void 0 : i.overflows) || [];
                    if (h && P.push(R[v]), m) {
                        let e = (0, r.i8)(c, d, S);
                        P.push(R[e[0]], R[e[1]]);
                    }
                    if (D = [
                            ...D,
                            {
                                placement: c,
                                overflows: P
                            }
                        ], !P.every(e => e <= 0)) {
                        let e = ((null == (a = u.flip) ? void 0 : a.index) || 0) + 1, t = N[e];
                        if (t && ('alignment' !== m || I === (0, r.Qq)(t) || D.every(e => (0, r.Qq)(e.placement) !== I || e.overflows[0] > 0)))
                            return {
                                data: {
                                    index: e,
                                    overflows: D
                                },
                                reset: { placement: t }
                            };
                        let n = null == (s = D.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : s.placement;
                        if (!n)
                            switch (E) {
                            case 'bestFit': {
                                    let e = null == (l = D.filter(e => {
                                        if (C) {
                                            let t = (0, r.Qq)(e.placement);
                                            return t === I || 'y' === t;
                                        }
                                        return !0;
                                    }).map(e => [
                                        e.placement,
                                        e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)
                                    ]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                    e && (n = e);
                                    break;
                                }
                            case 'initialPlacement':
                                n = f;
                            }
                        if (c !== n)
                            return { reset: { placement: n } };
                    }
                    return {};
                }
            };
        };
    function u(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        };
    }
    function d(e) {
        return r.mA.some(t => e[t] >= 0);
    }
    let f = function (e) {
        return void 0 === e && (e = {}), {
            name: 'hide',
            options: e,
            async fn(t) {
                let {rects: n} = t, {
                        strategy: i = 'referenceHidden',
                        ...a
                    } = (0, r.ku)(e, t);
                switch (i) {
                case 'referenceHidden': {
                        let e = u(await o(t, {
                            ...a,
                            elementContext: 'reference'
                        }), n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: e,
                                referenceHidden: d(e)
                            }
                        };
                    }
                case 'escaped': {
                        let e = u(await o(t, {
                            ...a,
                            altBoundary: !0
                        }), n.floating);
                        return {
                            data: {
                                escapedOffsets: e,
                                escaped: d(e)
                            }
                        };
                    }
                default:
                    return {};
                }
            }
        };
    };
    function _(e) {
        let t = min(...e.map(e => e.left)), n = min(...e.map(e => e.top));
        return {
            x: t,
            y: n,
            width: max(...e.map(e => e.right)) - t,
            height: max(...e.map(e => e.bottom)) - n
        };
    }
    let p = new Set([
        'left',
        'top'
    ]);
    async function h(e, t) {
        let {
                placement: n,
                platform: i,
                elements: a
            } = e, o = await (null == i.isRTL ? void 0 : i.isRTL(a.floating)), s = (0, r.k3)(n), l = (0, r.hp)(n), c = 'y' === (0, r.Qq)(n), u = p.has(s) ? -1 : 1, d = o && c ? -1 : 1, f = (0, r.ku)(t, e), {
                mainAxis: _,
                crossAxis: h,
                alignmentAxis: m
            } = 'number' == typeof f ? {
                mainAxis: f,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis
            };
        return l && 'number' == typeof m && (h = 'end' === l ? -1 * m : m), c ? {
            x: h * d,
            y: _ * u
        } : {
            x: _ * u,
            y: h * d
        };
    }
    let m = function (e) {
            return void 0 === e && (e = 0), {
                name: 'offset',
                options: e,
                async fn(t) {
                    var n, r;
                    let {
                            x: i,
                            y: a,
                            placement: o,
                            middlewareData: s
                        } = t, l = await h(t, e);
                    return o === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                        x: i + l.x,
                        y: a + l.y,
                        data: {
                            ...l,
                            placement: o
                        }
                    };
                }
            };
        }, g = function (e) {
            return void 0 === e && (e = {}), {
                name: 'shift',
                options: e,
                async fn(t) {
                    let {
                            x: n,
                            y: i,
                            placement: a
                        } = t, {
                            mainAxis: s = !0,
                            crossAxis: l = !1,
                            limiter: c = {
                                fn: e => {
                                    let {
                                        x: t,
                                        y: n
                                    } = e;
                                    return {
                                        x: t,
                                        y: n
                                    };
                                }
                            },
                            ...u
                        } = (0, r.ku)(e, t), d = {
                            x: n,
                            y: i
                        }, f = await o(t, u), _ = (0, r.Qq)((0, r.k3)(a)), p = (0, r.Rn)(_), h = d[p], m = d[_];
                    if (s) {
                        let e = 'y' === p ? 'top' : 'left', t = 'y' === p ? 'bottom' : 'right', n = h + f[e], i = h - f[t];
                        h = (0, r.uZ)(n, h, i);
                    }
                    if (l) {
                        let e = 'y' === _ ? 'top' : 'left', t = 'y' === _ ? 'bottom' : 'right', n = m + f[e], i = m - f[t];
                        m = (0, r.uZ)(n, m, i);
                    }
                    let g = c.fn({
                        ...t,
                        [p]: h,
                        [_]: m
                    });
                    return {
                        ...g,
                        data: {
                            x: g.x - n,
                            y: g.y - i,
                            enabled: {
                                [p]: s,
                                [_]: l
                            }
                        }
                    };
                }
            };
        }, E = function (e) {
            return void 0 === e && (e = {}), {
                options: e,
                fn(t) {
                    let {
                            x: n,
                            y: i,
                            placement: a,
                            rects: o,
                            middlewareData: s
                        } = t, {
                            offset: l = 0,
                            mainAxis: c = !0,
                            crossAxis: u = !0
                        } = (0, r.ku)(e, t), d = {
                            x: n,
                            y: i
                        }, f = (0, r.Qq)(a), _ = (0, r.Rn)(f), h = d[_], m = d[f], g = (0, r.ku)(l, t), E = 'number' == typeof g ? {
                            mainAxis: g,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...g
                        };
                    if (c) {
                        let e = 'y' === _ ? 'height' : 'width', t = o.reference[_] - o.floating[e] + E.mainAxis, n = o.reference[_] + o.reference[e] - E.mainAxis;
                        h < t ? h = t : h > n && (h = n);
                    }
                    if (u) {
                        var b, y;
                        let e = 'y' === _ ? 'width' : 'height', t = p.has((0, r.k3)(a)), n = o.reference[f] - o.floating[e] + (t && (null == (b = s.offset) ? void 0 : b[f]) || 0) + (t ? 0 : E.crossAxis), i = o.reference[f] + o.reference[e] + (t ? 0 : (null == (y = s.offset) ? void 0 : y[f]) || 0) - (t ? E.crossAxis : 0);
                        m < n ? m = n : m > i && (m = i);
                    }
                    return {
                        [_]: h,
                        [f]: m
                    };
                }
            };
        }, b = function (e) {
            return void 0 === e && (e = {}), {
                name: 'size',
                options: e,
                async fn(t) {
                    var n, i;
                    let a, s, {
                            placement: l,
                            rects: c,
                            platform: u,
                            elements: d
                        } = t, {
                            apply: f = () => {
                            },
                            ..._
                        } = (0, r.ku)(e, t), p = await o(t, _), h = (0, r.k3)(l), m = (0, r.hp)(l), g = 'y' === (0, r.Qq)(l), {
                            width: E,
                            height: b
                        } = c.floating;
                    'top' === h || 'bottom' === h ? (a = h, s = m === (await (null == u.isRTL ? void 0 : u.isRTL(d.floating)) ? 'start' : 'end') ? 'left' : 'right') : (s = h, a = 'end' === m ? 'top' : 'bottom');
                    let y = b - p.top - p.bottom, O = E - p.left - p.right, v = (0, r.VV)(b - p[a], y), I = (0, r.VV)(E - p[s], O), T = !t.middlewareData.shift, S = v, A = I;
                    if (null != (n = t.middlewareData.shift) && n.enabled.x && (A = O), null != (i = t.middlewareData.shift) && i.enabled.y && (S = y), T && !m) {
                        let e = (0, r.Fp)(p.left, 0), t = (0, r.Fp)(p.right, 0), n = (0, r.Fp)(p.top, 0), i = (0, r.Fp)(p.bottom, 0);
                        g ? A = E - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(p.left, p.right)) : S = b - 2 * (0 !== n || 0 !== i ? n + i : (0, r.Fp)(p.top, p.bottom));
                    }
                    await f({
                        ...t,
                        availableWidth: A,
                        availableHeight: S
                    });
                    let C = await u.getDimensions(d.floating);
                    return E !== C.width || b !== C.height ? { reset: { rects: !0 } } : {};
                }
            };
        };