n.d(t, {
        Cp: () => f,
        RR: () => c,
        X5: () => l,
        cv: () => h,
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
            } = e, s = (0, r.Qq)(t), l = (0, r.Wh)(t), c = (0, r.I4)(l), u = (0, r.k3)(t), d = 'y' === s, f = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, _ = a[c] / 2 - o[c] / 2;
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
                y: p
            };
            break;
        case 'left':
            i = {
                x: a.x - o.width,
                y: p
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
            i[l] -= _ * (n && d ? -1 : 1);
            break;
        case 'end':
            i[l] += _ * (n && d ? -1 : 1);
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
            } = i(u, r, c), p = r, _ = {}, m = 0;
        for (let n = 0; n < l.length; n++) {
            let {
                    name: o,
                    fn: h
                } = l[n], {
                    x: g,
                    y: E,
                    data: b,
                    reset: y
                } = await h({
                    x: d,
                    y: f,
                    initialPlacement: r,
                    placement: p,
                    strategy: a,
                    middlewareData: _,
                    rects: u,
                    platform: s,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
            d = null != g ? g : d, f = null != E ? E : f, _ = {
                ..._,
                [o]: {
                    ..._[o],
                    ...b
                }
            }, y && m <= 50 && (m++, 'object' == typeof y && (y.placement && (p = y.placement), y.rects && (u = !0 === y.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: a
            }) : y.rects), {
                x: d,
                y: f
            } = i(u, p, c)), n = -1);
        }
        return {
            x: d,
            y: f,
            placement: p,
            strategy: a,
            middlewareData: _
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
                altBoundary: p = !1,
                padding: _ = 0
            } = (0, r.ku)(t, e), m = (0, r.yd)(_), h = 'floating' === f ? 'reference' : 'floating', g = l[p ? h : f], E = (0, r.JB)(await o.getClippingRect({
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
            top: (E.top - v.top + m.top) / O.y,
            bottom: (v.bottom - E.bottom + m.bottom) / O.y,
            left: (E.left - v.left + m.left) / O.x,
            right: (v.right - E.right + m.right) / O.x
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
                            crossAxis: p = !1,
                            alignment: _,
                            allowedPlacements: m = r.Ct,
                            autoAlignment: h = !0,
                            ...g
                        } = (0, r.ku)(e, t), E = void 0 !== _ || m === r.Ct ? s(_ || null, h, m) : m, b = await o(t, g), y = (null == (n = c.autoPlacement) ? void 0 : n.index) || 0, O = E[y];
                    if (null == O)
                        return {};
                    let v = (0, r.i8)(O, l, await (null == d.isRTL ? void 0 : d.isRTL(f.floating)));
                    if (u !== O)
                        return { reset: { placement: E[0] } };
                    let S = [
                            b[(0, r.k3)(O)],
                            b[v[0]],
                            b[v[1]]
                        ], I = [
                            ...(null == (i = c.autoPlacement) ? void 0 : i.overflows) || [],
                            {
                                placement: O,
                                overflows: S
                            }
                        ], T = E[y + 1];
                    if (T)
                        return {
                            data: {
                                index: y + 1,
                                overflows: I
                            },
                            reset: { placement: T }
                        };
                    let C = I.map(e => {
                            let t = (0, r.hp)(e.placement);
                            return [
                                e.placement,
                                t && p ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                                e.overflows
                            ];
                        }).sort((e, t) => e[1] - t[1]), A = (null == (a = C.filter(e => e[2].slice(0, (0, r.hp)(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : a[0]) || C[0][0];
                    return A !== u ? {
                        data: {
                            index: y + 1,
                            overflows: I
                        },
                        reset: { placement: A }
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
                            platform: p,
                            elements: _
                        } = t, {
                            mainAxis: m = !0,
                            crossAxis: h = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: E = 'bestFit',
                            fallbackAxisSideDirection: b = 'none',
                            flipAlignment: y = !0,
                            ...O
                        } = (0, r.ku)(e, t);
                    if (null != (n = u.arrow) && n.alignmentOffset)
                        return {};
                    let v = (0, r.k3)(c), S = (0, r.Qq)(f), I = (0, r.k3)(f) === f, T = await (null == p.isRTL ? void 0 : p.isRTL(_.floating)), C = g || (I || !y ? [(0, r.pw)(f)] : (0, r.gy)(f)), A = 'none' !== b;
                    !g && A && C.push(...(0, r.KX)(f, y, b, T));
                    let N = [
                            f,
                            ...C
                        ], P = await o(t, O), R = [], w = (null == (i = u.flip) ? void 0 : i.overflows) || [];
                    if (m && R.push(P[v]), h) {
                        let e = (0, r.i8)(c, d, T);
                        R.push(P[e[0]], P[e[1]]);
                    }
                    if (w = [
                            ...w,
                            {
                                placement: c,
                                overflows: R
                            }
                        ], !R.every(e => e <= 0)) {
                        let e = ((null == (a = u.flip) ? void 0 : a.index) || 0) + 1, t = N[e];
                        if (t && ('alignment' !== h || S === (0, r.Qq)(t) || w.every(e => (0, r.Qq)(e.placement) !== S || e.overflows[0] > 0)))
                            return {
                                data: {
                                    index: e,
                                    overflows: w
                                },
                                reset: { placement: t }
                            };
                        let n = null == (s = w.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : s.placement;
                        if (!n)
                            switch (E) {
                            case 'bestFit': {
                                    let e = null == (l = w.filter(e => {
                                        if (A) {
                                            let t = (0, r.Qq)(e.placement);
                                            return t === S || 'y' === t;
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
    function p(e) {
        let t = min(...e.map(e => e.left)), n = min(...e.map(e => e.top));
        return {
            x: t,
            y: n,
            width: max(...e.map(e => e.right)) - t,
            height: max(...e.map(e => e.bottom)) - n
        };
    }
    let _ = new Set([
        'left',
        'top'
    ]);
    async function m(e, t) {
        let {
                placement: n,
                platform: i,
                elements: a
            } = e, o = await (null == i.isRTL ? void 0 : i.isRTL(a.floating)), s = (0, r.k3)(n), l = (0, r.hp)(n), c = 'y' === (0, r.Qq)(n), u = _.has(s) ? -1 : 1, d = o && c ? -1 : 1, f = (0, r.ku)(t, e), {
                mainAxis: p,
                crossAxis: m,
                alignmentAxis: h
            } = 'number' == typeof f ? {
                mainAxis: f,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis
            };
        return l && 'number' == typeof h && (m = 'end' === l ? -1 * h : h), c ? {
            x: m * d,
            y: p * u
        } : {
            x: p * u,
            y: m * d
        };
    }
    let h = function (e) {
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
                        } = t, l = await m(t, e);
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
                        }, f = await o(t, u), p = (0, r.Qq)((0, r.k3)(a)), _ = (0, r.Rn)(p), m = d[_], h = d[p];
                    if (s) {
                        let e = 'y' === _ ? 'top' : 'left', t = 'y' === _ ? 'bottom' : 'right', n = m + f[e], i = m - f[t];
                        m = (0, r.uZ)(n, m, i);
                    }
                    if (l) {
                        let e = 'y' === p ? 'top' : 'left', t = 'y' === p ? 'bottom' : 'right', n = h + f[e], i = h - f[t];
                        h = (0, r.uZ)(n, h, i);
                    }
                    let g = c.fn({
                        ...t,
                        [_]: m,
                        [p]: h
                    });
                    return {
                        ...g,
                        data: {
                            x: g.x - n,
                            y: g.y - i,
                            enabled: {
                                [_]: s,
                                [p]: l
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
                        }, f = (0, r.Qq)(a), p = (0, r.Rn)(f), m = d[p], h = d[f], g = (0, r.ku)(l, t), E = 'number' == typeof g ? {
                            mainAxis: g,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...g
                        };
                    if (c) {
                        let e = 'y' === p ? 'height' : 'width', t = o.reference[p] - o.floating[e] + E.mainAxis, n = o.reference[p] + o.reference[e] - E.mainAxis;
                        m < t ? m = t : m > n && (m = n);
                    }
                    if (u) {
                        var b, y;
                        let e = 'y' === p ? 'width' : 'height', t = _.has((0, r.k3)(a)), n = o.reference[f] - o.floating[e] + (t && (null == (b = s.offset) ? void 0 : b[f]) || 0) + (t ? 0 : E.crossAxis), i = o.reference[f] + o.reference[e] + (t ? 0 : (null == (y = s.offset) ? void 0 : y[f]) || 0) - (t ? E.crossAxis : 0);
                        h < n ? h = n : h > i && (h = i);
                    }
                    return {
                        [p]: m,
                        [f]: h
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
                            ...p
                        } = (0, r.ku)(e, t), _ = await o(t, p), m = (0, r.k3)(l), h = (0, r.hp)(l), g = 'y' === (0, r.Qq)(l), {
                            width: E,
                            height: b
                        } = c.floating;
                    'top' === m || 'bottom' === m ? (a = m, s = h === (await (null == u.isRTL ? void 0 : u.isRTL(d.floating)) ? 'start' : 'end') ? 'left' : 'right') : (s = m, a = 'end' === h ? 'top' : 'bottom');
                    let y = b - _.top - _.bottom, O = E - _.left - _.right, v = (0, r.VV)(b - _[a], y), S = (0, r.VV)(E - _[s], O), I = !t.middlewareData.shift, T = v, C = S;
                    if (null != (n = t.middlewareData.shift) && n.enabled.x && (C = O), null != (i = t.middlewareData.shift) && i.enabled.y && (T = y), I && !h) {
                        let e = (0, r.Fp)(_.left, 0), t = (0, r.Fp)(_.right, 0), n = (0, r.Fp)(_.top, 0), i = (0, r.Fp)(_.bottom, 0);
                        g ? C = E - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(_.left, _.right)) : T = b - 2 * (0 !== n || 0 !== i ? n + i : (0, r.Fp)(_.top, _.bottom));
                    }
                    await f({
                        ...t,
                        availableWidth: C,
                        availableHeight: T
                    });
                    let A = await u.getDimensions(d.floating);
                    return E !== A.width || b !== A.height ? { reset: { rects: !0 } } : {};
                }
            };
        };