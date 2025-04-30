n.d(t, { S: () => el });
for (
    var o = n(44837),
        r = n(183759),
        i = n(891943),
        a = n(856706),
        s = n(706852),
        u = n(809532),
        l = n(619825),
        c = n(192379),
        d = n(489661),
        p = n(579791),
        f = n(820326),
        h = n(381537),
        v = {
            name: '7pg0cj-a11yText',
            styles: 'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap'
        },
        m = function (e) {
            return (0, p.tZ)('span', (0, o.Z)({ css: v }, e));
        },
        g = {
            guidance: function (e) {
                var t = e.isSearchable,
                    n = e.isMulti,
                    o = e.tabSelectsValue,
                    r = e.context,
                    i = e.isInitialFocus;
                switch (r) {
                    case 'menu':
                        return 'Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu'.concat(o ? ', press Tab to select the option and exit the menu' : '', '.');
                    case 'input':
                        return i
                            ? ''
                                  .concat(e['aria-label'] || 'Select', ' is focused ')
                                  .concat(t ? ',type to refine list' : '', ', press Down to open the menu, ')
                                  .concat(n ? ' press left to focus selected values' : '')
                            : '';
                    case 'value':
                        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
                    default:
                        return '';
                }
            },
            onChange: function (e) {
                var t = e.action,
                    n = e.label,
                    o = void 0 === n ? '' : n,
                    r = e.labels,
                    i = e.isDisabled;
                switch (t) {
                    case 'deselect-option':
                    case 'pop-value':
                    case 'remove-value':
                        return 'option '.concat(o, ', deselected.');
                    case 'clear':
                        return 'All selected options have been cleared.';
                    case 'initial-input-focus':
                        return 'option'.concat(r.length > 1 ? 's' : '', ' ').concat(r.join(','), ', selected.');
                    case 'select-option':
                        return i ? 'option '.concat(o, ' is disabled. Select another option.') : 'option '.concat(o, ', selected.');
                    default:
                        return '';
                }
            },
            onFocus: function (e) {
                var t = e.context,
                    n = e.focused,
                    o = e.options,
                    r = e.label,
                    i = void 0 === r ? '' : r,
                    a = e.selectValue,
                    s = e.isDisabled,
                    u = e.isSelected,
                    l = e.isAppleDevice,
                    c = function (e, t) {
                        return e && e.length ? ''.concat(e.indexOf(t) + 1, ' of ').concat(e.length) : '';
                    };
                if ('value' === t && a) return 'value '.concat(i, ' focused, ').concat(c(a, n), '.');
                if ('menu' === t && l) {
                    var d = ''.concat(u ? ' selected' : '').concat(s ? ' disabled' : '');
                    return ''.concat(i).concat(d, ', ').concat(c(o, n), '.');
                }
                return '';
            },
            onFilter: function (e) {
                var t = e.inputValue,
                    n = e.resultsMessage;
                return ''.concat(n).concat(t ? ' for search term ' + t : '', '.');
            }
        },
        b = function (e) {
            var t = e.ariaSelection,
                n = e.focusedOption,
                o = e.focusedValue,
                i = e.focusableOptions,
                a = e.isFocused,
                s = e.selectValue,
                u = e.selectProps,
                l = e.id,
                d = e.isAppleDevice,
                f = u.ariaLiveMessages,
                h = u.getOptionLabel,
                v = u.inputValue,
                b = u.isMulti,
                y = u.isOptionDisabled,
                O = u.isSearchable,
                w = u.menuIsOpen,
                x = u.options,
                Z = u.screenReaderStatus,
                C = u.tabSelectsValue,
                S = u.isLoading,
                M = u['aria-label'],
                I = u['aria-live'],
                E = (0, c.useMemo)(
                    function () {
                        return (0, r.Z)((0, r.Z)({}, g), f || {});
                    },
                    [f]
                ),
                k = (0, c.useMemo)(
                    function () {
                        var e = '';
                        if (t && E.onChange) {
                            var n = t.option,
                                o = t.options,
                                i = t.removedValue,
                                a = t.removedValues,
                                u = t.value,
                                l = i || n || (Array.isArray(u) ? null : u),
                                c = l ? h(l) : '',
                                d = o || a || void 0,
                                p = d ? d.map(h) : [],
                                f = (0, r.Z)(
                                    {
                                        isDisabled: l && y(l, s),
                                        label: c,
                                        labels: p
                                    },
                                    t
                                );
                            e = E.onChange(f);
                        }
                        return e;
                    },
                    [t, E, y, s, h]
                ),
                V = (0, c.useMemo)(
                    function () {
                        var e = '',
                            t = n || o,
                            r = !!(n && s && s.includes(n));
                        if (t && E.onFocus) {
                            var a = {
                                focused: t,
                                label: h(t),
                                isDisabled: y(t, s),
                                isSelected: r,
                                options: i,
                                context: t === n ? 'menu' : 'value',
                                selectValue: s,
                                isAppleDevice: d
                            };
                            e = E.onFocus(a);
                        }
                        return e;
                    },
                    [n, o, h, y, E, i, s, d]
                ),
                R = (0, c.useMemo)(
                    function () {
                        var e = '';
                        if (w && x.length && !S && E.onFilter) {
                            var t = Z({ count: i.length });
                            e = E.onFilter({
                                inputValue: v,
                                resultsMessage: t
                            });
                        }
                        return e;
                    },
                    [i, v, w, E, x, Z, S]
                ),
                P = (null == t ? void 0 : t.action) === 'initial-input-focus',
                D = (0, c.useMemo)(
                    function () {
                        var e = '';
                        if (E.guidance) {
                            var t = o ? 'value' : w ? 'menu' : 'input';
                            e = E.guidance({
                                'aria-label': M,
                                context: t,
                                isDisabled: n && y(n, s),
                                isMulti: b,
                                isSearchable: O,
                                tabSelectsValue: C,
                                isInitialFocus: P
                            });
                        }
                        return e;
                    },
                    [M, n, o, b, y, O, w, E, s, C, P]
                ),
                F = (0, p.tZ)(c.Fragment, null, (0, p.tZ)('span', { id: 'aria-selection' }, k), (0, p.tZ)('span', { id: 'aria-focused' }, V), (0, p.tZ)('span', { id: 'aria-results' }, R), (0, p.tZ)('span', { id: 'aria-guidance' }, D));
            return (0, p.tZ)(
                c.Fragment,
                null,
                (0, p.tZ)(m, { id: l }, P && F),
                (0, p.tZ)(
                    m,
                    {
                        'aria-live': I,
                        'aria-atomic': 'false',
                        'aria-relevant': 'additions text',
                        role: 'log'
                    },
                    a && !P && F
                )
            );
        },
        y = [
            {
                base: 'A',
                letters: 'A\u24B6ＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ'
            },
            {
                base: 'AA',
                letters: 'Ꜳ'
            },
            {
                base: 'AE',
                letters: 'ÆǼǢ'
            },
            {
                base: 'AO',
                letters: 'Ꜵ'
            },
            {
                base: 'AU',
                letters: 'Ꜷ'
            },
            {
                base: 'AV',
                letters: 'ꜸꜺ'
            },
            {
                base: 'AY',
                letters: 'Ꜽ'
            },
            {
                base: 'B',
                letters: 'B\u24B7ＢḂḄḆɃƂƁ'
            },
            {
                base: 'C',
                letters: 'C\u24B8ＣĆĈĊČÇḈƇȻꜾ'
            },
            {
                base: 'D',
                letters: 'D\u24B9ＤḊĎḌḐḒḎĐƋƊƉꝹ'
            },
            {
                base: 'DZ',
                letters: 'ǱǄ'
            },
            {
                base: 'Dz',
                letters: 'ǲǅ'
            },
            {
                base: 'E',
                letters: 'E\u24BAＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ'
            },
            {
                base: 'F',
                letters: 'F\u24BBＦḞƑꝻ'
            },
            {
                base: 'G',
                letters: 'G\u24BCＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ'
            },
            {
                base: 'H',
                letters: 'H\u24BDＨĤḢḦȞḤḨḪĦⱧⱵꞍ'
            },
            {
                base: 'I',
                letters: 'I\u24BEＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ'
            },
            {
                base: 'J',
                letters: 'J\u24BFＪĴɈ'
            },
            {
                base: 'K',
                letters: 'K\u24C0ＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ'
            },
            {
                base: 'L',
                letters: 'L\u24C1ＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ'
            },
            {
                base: 'LJ',
                letters: 'Ǉ'
            },
            {
                base: 'Lj',
                letters: 'ǈ'
            },
            {
                base: 'M',
                letters: 'M\u24C2ＭḾṀṂⱮƜ'
            },
            {
                base: 'N',
                letters: 'N\u24C3ＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ'
            },
            {
                base: 'NJ',
                letters: 'Ǌ'
            },
            {
                base: 'Nj',
                letters: 'ǋ'
            },
            {
                base: 'O',
                letters: 'O\u24C4ＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ'
            },
            {
                base: 'OI',
                letters: 'Ƣ'
            },
            {
                base: 'OO',
                letters: 'Ꝏ'
            },
            {
                base: 'OU',
                letters: 'Ȣ'
            },
            {
                base: 'P',
                letters: 'P\u24C5ＰṔṖƤⱣꝐꝒꝔ'
            },
            {
                base: 'Q',
                letters: 'Q\u24C6ＱꝖꝘɊ'
            },
            {
                base: 'R',
                letters: 'R\u24C7ＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ'
            },
            {
                base: 'S',
                letters: 'S\u24C8ＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ'
            },
            {
                base: 'T',
                letters: 'T\u24C9ＴṪŤṬȚŢṰṮŦƬƮȾꞆ'
            },
            {
                base: 'TZ',
                letters: 'Ꜩ'
            },
            {
                base: 'U',
                letters: 'U\u24CAＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ'
            },
            {
                base: 'V',
                letters: 'V\u24CBＶṼṾƲꝞɅ'
            },
            {
                base: 'VY',
                letters: 'Ꝡ'
            },
            {
                base: 'W',
                letters: 'W\u24CCＷẀẂŴẆẄẈⱲ'
            },
            {
                base: 'X',
                letters: 'X\u24CDＸẊẌ'
            },
            {
                base: 'Y',
                letters: 'Y\u24CEＹỲÝŶỸȲẎŸỶỴƳɎỾ'
            },
            {
                base: 'Z',
                letters: 'Z\u24CFＺŹẐŻŽẒẔƵȤⱿⱫꝢ'
            },
            {
                base: 'a',
                letters: 'a\u24D0ａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ'
            },
            {
                base: 'aa',
                letters: 'ꜳ'
            },
            {
                base: 'ae',
                letters: 'æǽǣ'
            },
            {
                base: 'ao',
                letters: 'ꜵ'
            },
            {
                base: 'au',
                letters: 'ꜷ'
            },
            {
                base: 'av',
                letters: 'ꜹꜻ'
            },
            {
                base: 'ay',
                letters: 'ꜽ'
            },
            {
                base: 'b',
                letters: 'b\u24D1ｂḃḅḇƀƃɓ'
            },
            {
                base: 'c',
                letters: 'c\u24D2ｃćĉċčçḉƈȼꜿↄ'
            },
            {
                base: 'd',
                letters: 'd\u24D3ｄḋďḍḑḓḏđƌɖɗꝺ'
            },
            {
                base: 'dz',
                letters: 'ǳǆ'
            },
            {
                base: 'e',
                letters: 'e\u24D4ｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ'
            },
            {
                base: 'f',
                letters: 'f\u24D5ｆḟƒꝼ'
            },
            {
                base: 'g',
                letters: 'g\u24D6ｇǵĝḡğġǧģǥɠꞡᵹꝿ'
            },
            {
                base: 'h',
                letters: 'h\u24D7ｈĥḣḧȟḥḩḫẖħⱨⱶɥ'
            },
            {
                base: 'hv',
                letters: 'ƕ'
            },
            {
                base: 'i',
                letters: 'i\u24D8ｉìíîĩīĭïḯỉǐȉȋịįḭɨı'
            },
            {
                base: 'j',
                letters: 'j\u24D9ｊĵǰɉ'
            },
            {
                base: 'k',
                letters: 'k\u24DAｋḱǩḳķḵƙⱪꝁꝃꝅꞣ'
            },
            {
                base: 'l',
                letters: 'l\u24DBｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ'
            },
            {
                base: 'lj',
                letters: 'ǉ'
            },
            {
                base: 'm',
                letters: 'm\u24DCｍḿṁṃɱɯ'
            },
            {
                base: 'n',
                letters: 'n\u24DDｎǹńñṅňṇņṋṉƞɲŉꞑꞥ'
            },
            {
                base: 'nj',
                letters: 'ǌ'
            },
            {
                base: 'o',
                letters: 'o\u24DEｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ'
            },
            {
                base: 'oi',
                letters: 'ƣ'
            },
            {
                base: 'ou',
                letters: 'ȣ'
            },
            {
                base: 'oo',
                letters: 'ꝏ'
            },
            {
                base: 'p',
                letters: 'p\u24DFｐṕṗƥᵽꝑꝓꝕ'
            },
            {
                base: 'q',
                letters: 'q\u24E0ｑɋꝗꝙ'
            },
            {
                base: 'r',
                letters: 'r\u24E1ｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ'
            },
            {
                base: 's',
                letters: 's\u24E2ｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ'
            },
            {
                base: 't',
                letters: 't\u24E3ｔṫẗťṭțţṱṯŧƭʈⱦꞇ'
            },
            {
                base: 'tz',
                letters: 'ꜩ'
            },
            {
                base: 'u',
                letters: 'u\u24E4ｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ'
            },
            {
                base: 'v',
                letters: 'v\u24E5ｖṽṿʋꝟʌ'
            },
            {
                base: 'vy',
                letters: 'ꝡ'
            },
            {
                base: 'w',
                letters: 'w\u24E6ｗẁẃŵẇẅẘẉⱳ'
            },
            {
                base: 'x',
                letters: 'x\u24E7ｘẋẍ'
            },
            {
                base: 'y',
                letters: 'y\u24E8ｙỳýŷỹȳẏÿỷẙỵƴɏỿ'
            },
            {
                base: 'z',
                letters: 'z\u24E9ｚźẑżžẓẕƶȥɀⱬꝣ'
            }
        ],
        O = RegExp(
            '[' +
                y
                    .map(function (e) {
                        return e.letters;
                    })
                    .join('') +
                ']',
            'g'
        ),
        w = {},
        x = 0;
    x < y.length;
    x++
)
    for (var Z = y[x], C = 0; C < Z.letters.length; C++) w[Z.letters[C]] = Z.base;
var S = function (e) {
        return e.replace(O, function (e) {
            return w[e];
        });
    },
    M = (0, f.Z)(S),
    I = function (e) {
        return e.replace(/^\s+|\s+$/g, '');
    },
    E = function (e) {
        return ''.concat(e.label, ' ').concat(e.value);
    },
    k = ['innerRef'];
function V(e) {
    var t = e.innerRef,
        n = (0, h.Z)(e, k),
        r = (0, d.r)(n, 'onExited', 'in', 'enter', 'exit', 'appear');
    return (0, p.tZ)(
        'input',
        (0, o.Z)({ ref: t }, r, {
            css: (0, p.iv)(
                {
                    label: 'dummyInput',
                    background: 0,
                    border: 0,
                    caretColor: 'transparent',
                    fontSize: 'inherit',
                    gridArea: '1 / 1 / 2 / 3',
                    outline: 0,
                    padding: 0,
                    width: 1,
                    color: 'transparent',
                    left: -100,
                    opacity: 0,
                    position: 'relative',
                    transform: 'scale(.01)'
                },
                '',
                ''
            )
        })
    );
}
var R = function (e) {
        e.cancelable && e.preventDefault(), e.stopPropagation();
    },
    P = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
    D = {
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        height: '100%'
    };
function F(e) {
    e.cancelable && e.preventDefault();
}
function L(e) {
    e.stopPropagation();
}
function T() {
    var e = this.scrollTop,
        t = this.scrollHeight,
        n = e + this.offsetHeight;
    0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function A() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var H = !!('undefined' != typeof window && window.document && window.document.createElement),
    $ = 0,
    G = {
        capture: !1,
        passive: !1
    },
    j = function (e) {
        var t = e.target;
        return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur();
    },
    N = {
        name: '1kfdb0e',
        styles: 'position:fixed;left:0;bottom:0;right:0;top:0'
    };
function U(e) {
    var t,
        n,
        o,
        r,
        i,
        a,
        s,
        u,
        l,
        f,
        h,
        v,
        m,
        g,
        b,
        y,
        O,
        w,
        x,
        Z,
        C,
        S,
        M,
        I,
        E = e.children,
        k = e.lockEnabled,
        V = e.captureEnabled,
        U =
            ((n = (t = {
                isEnabled: void 0 === V || V,
                onBottomArrive: e.onBottomArrive,
                onBottomLeave: e.onBottomLeave,
                onTopArrive: e.onTopArrive,
                onTopLeave: e.onTopLeave
            }).isEnabled),
            (o = t.onBottomArrive),
            (r = t.onBottomLeave),
            (i = t.onTopArrive),
            (a = t.onTopLeave),
            (s = (0, c.useRef)(!1)),
            (u = (0, c.useRef)(!1)),
            (l = (0, c.useRef)(0)),
            (f = (0, c.useRef)(null)),
            (h = (0, c.useCallback)(
                function (e, t) {
                    if (null !== f.current) {
                        var n = f.current,
                            l = n.scrollTop,
                            c = n.scrollHeight,
                            d = n.clientHeight,
                            p = f.current,
                            h = t > 0,
                            v = c - d - l,
                            m = !1;
                        v > t && s.current && (r && r(e), (s.current = !1)), h && u.current && (a && a(e), (u.current = !1)), h && t > v ? (o && !s.current && o(e), (p.scrollTop = c), (m = !0), (s.current = !0)) : !h && -t > l && (i && !u.current && i(e), (p.scrollTop = 0), (m = !0), (u.current = !0)), m && R(e);
                    }
                },
                [o, r, i, a]
            )),
            (v = (0, c.useCallback)(
                function (e) {
                    h(e, e.deltaY);
                },
                [h]
            )),
            (m = (0, c.useCallback)(function (e) {
                l.current = e.changedTouches[0].clientY;
            }, [])),
            (g = (0, c.useCallback)(
                function (e) {
                    var t = l.current - e.changedTouches[0].clientY;
                    h(e, t);
                },
                [h]
            )),
            (b = (0, c.useCallback)(
                function (e) {
                    if (e) {
                        var t = !!d.s && { passive: !1 };
                        e.addEventListener('wheel', v, t), e.addEventListener('touchstart', m, t), e.addEventListener('touchmove', g, t);
                    }
                },
                [g, m, v]
            )),
            (y = (0, c.useCallback)(
                function (e) {
                    e && (e.removeEventListener('wheel', v, !1), e.removeEventListener('touchstart', m, !1), e.removeEventListener('touchmove', g, !1));
                },
                [g, m, v]
            )),
            (0, c.useEffect)(
                function () {
                    if (n) {
                        var e = f.current;
                        return (
                            b(e),
                            function () {
                                y(e);
                            }
                        );
                    }
                },
                [n, b, y]
            ),
            function (e) {
                f.current = e;
            }),
        z =
            ((w = (O = { isEnabled: k }).isEnabled),
            (Z = void 0 === (x = O.accountForScrollbars) || x),
            (C = (0, c.useRef)({})),
            (S = (0, c.useRef)(null)),
            (M = (0, c.useCallback)(
                function (e) {
                    if (H) {
                        var t = document.body,
                            n = t && t.style;
                        if (
                            (Z &&
                                P.forEach(function (e) {
                                    var t = n && n[e];
                                    C.current[e] = t;
                                }),
                            Z && $ < 1)
                        ) {
                            var o = parseInt(C.current.paddingRight, 10) || 0,
                                r = document.body ? document.body.clientWidth : 0,
                                i = window.innerWidth - r + o || 0;
                            Object.keys(D).forEach(function (e) {
                                var t = D[e];
                                n && (n[e] = t);
                            }),
                                n && (n.paddingRight = ''.concat(i, 'px'));
                        }
                        t && A() && (t.addEventListener('touchmove', F, G), e && (e.addEventListener('touchstart', T, G), e.addEventListener('touchmove', L, G))), ($ += 1);
                    }
                },
                [Z]
            )),
            (I = (0, c.useCallback)(
                function (e) {
                    if (H) {
                        var t = document.body,
                            n = t && t.style;
                        ($ = Math.max($ - 1, 0)),
                            Z &&
                                $ < 1 &&
                                P.forEach(function (e) {
                                    var t = C.current[e];
                                    n && (n[e] = t);
                                }),
                            t && A() && (t.removeEventListener('touchmove', F, G), e && (e.removeEventListener('touchstart', T, G), e.removeEventListener('touchmove', L, G)));
                    }
                },
                [Z]
            )),
            (0, c.useEffect)(
                function () {
                    if (w) {
                        var e = S.current;
                        return (
                            M(e),
                            function () {
                                I(e);
                            }
                        );
                    }
                },
                [w, M, I]
            ),
            function (e) {
                S.current = e;
            });
    return (0, p.tZ)(
        c.Fragment,
        null,
        k &&
            (0, p.tZ)('div', {
                onClick: j,
                css: N
            }),
        E(function (e) {
            U(e), z(e);
        })
    );
}
var z = {
        name: '1a0ro4n-requiredInput',
        styles: 'label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%'
    },
    B = function (e) {
        var t = e.name,
            n = e.onFocus;
        return (0, p.tZ)('input', {
            required: !0,
            name: t,
            tabIndex: -1,
            'aria-hidden': 'true',
            onFocus: n,
            css: z,
            value: '',
            onChange: function () {}
        });
    };
function _(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform);
}
var W = {
        clearIndicator: d.a,
        container: d.b,
        control: d.d,
        dropdownIndicator: d.e,
        group: d.g,
        groupHeading: d.f,
        indicatorsContainer: d.i,
        indicatorSeparator: d.h,
        input: d.j,
        loadingIndicator: d.l,
        loadingMessage: d.k,
        menu: d.m,
        menuList: d.n,
        menuPortal: d.o,
        multiValue: d.p,
        multiValueLabel: d.q,
        multiValueRemove: d.t,
        noOptionsMessage: d.u,
        option: d.v,
        placeholder: d.w,
        singleValue: d.x,
        valueContainer: d.y
    },
    K = {
        borderRadius: 4,
        colors: {
            primary: '#2684FF',
            primary75: '#4C9AFF',
            primary50: '#B2D4FF',
            primary25: '#DEEBFF',
            danger: '#DE350B',
            dangerLight: '#FFBDAD',
            neutral0: 'hsl(0, 0%, 100%)',
            neutral5: 'hsl(0, 0%, 95%)',
            neutral10: 'hsl(0, 0%, 90%)',
            neutral20: 'hsl(0, 0%, 80%)',
            neutral30: 'hsl(0, 0%, 70%)',
            neutral40: 'hsl(0, 0%, 60%)',
            neutral50: 'hsl(0, 0%, 50%)',
            neutral60: 'hsl(0, 0%, 40%)',
            neutral70: 'hsl(0, 0%, 30%)',
            neutral80: 'hsl(0, 0%, 20%)',
            neutral90: 'hsl(0, 0%, 10%)'
        },
        spacing: {
            baseUnit: 4,
            controlHeight: 38,
            menuGutter: 8
        }
    },
    q = {
        'aria-live': 'polite',
        backspaceRemovesValue: !0,
        blurInputOnSelect: (0, d.z)(),
        captureMenuScroll: !(0, d.z)(),
        classNames: {},
        closeMenuOnSelect: !0,
        closeMenuOnScroll: !1,
        components: {},
        controlShouldRenderValue: !0,
        escapeClearsValue: !1,
        filterOption: function (e, t) {
            if (e.data.__isNew__) return !0;
            var n = (0, r.Z)(
                    {
                        ignoreCase: !0,
                        ignoreAccents: !0,
                        stringify: E,
                        trim: !0,
                        matchFrom: 'any'
                    },
                    void 0
                ),
                o = n.ignoreCase,
                i = n.ignoreAccents,
                a = n.stringify,
                s = n.trim,
                u = n.matchFrom,
                l = s ? I(t) : t,
                c = s ? I(a(e)) : a(e);
            return o && ((l = l.toLowerCase()), (c = c.toLowerCase())), i && ((l = M(l)), (c = S(c))), 'start' === u ? c.substr(0, l.length) === l : c.indexOf(l) > -1;
        },
        formatGroupLabel: function (e) {
            return e.label;
        },
        getOptionLabel: function (e) {
            return e.label;
        },
        getOptionValue: function (e) {
            return e.value;
        },
        isDisabled: !1,
        isLoading: !1,
        isMulti: !1,
        isRtl: !1,
        isSearchable: !0,
        isOptionDisabled: function (e) {
            return !!e.isDisabled;
        },
        loadingMessage: function () {
            return 'Loading...';
        },
        maxMenuHeight: 300,
        minMenuHeight: 140,
        menuIsOpen: !1,
        menuPlacement: 'bottom',
        menuPosition: 'absolute',
        menuShouldBlockScroll: !1,
        menuShouldScrollIntoView: !(0, d.A)(),
        noOptionsMessage: function () {
            return 'No options';
        },
        openMenuOnFocus: !1,
        openMenuOnClick: !0,
        options: [],
        pageSize: 5,
        placeholder: 'Select...',
        screenReaderStatus: function (e) {
            var t = e.count;
            return ''.concat(t, ' result').concat(1 !== t ? 's' : '', ' available');
        },
        styles: {},
        tabIndex: 0,
        tabSelectsValue: !0,
        unstyled: !1
    };
function J(e, t, n, o) {
    var r = er(e, t, n),
        i = ei(e, t, n),
        a = en(e, t),
        s = eo(e, t);
    return {
        type: 'option',
        data: t,
        isDisabled: r,
        isSelected: i,
        label: a,
        value: s,
        index: o
    };
}
function Y(e, t) {
    return e.options
        .map(function (n, o) {
            if ('options' in n) {
                var r = n.options
                    .map(function (n, o) {
                        return J(e, n, t, o);
                    })
                    .filter(function (t) {
                        return ee(e, t);
                    });
                return r.length > 0
                    ? {
                          type: 'group',
                          data: n,
                          options: r,
                          index: o
                      }
                    : void 0;
            }
            var i = J(e, n, t, o);
            return ee(e, i) ? i : void 0;
        })
        .filter(d.K);
}
function X(e) {
    return e.reduce(function (e, t) {
        return (
            'group' === t.type
                ? e.push.apply(
                      e,
                      (0, l.Z)(
                          t.options.map(function (e) {
                              return e.data;
                          })
                      )
                  )
                : e.push(t.data),
            e
        );
    }, []);
}
function Q(e, t) {
    return e.reduce(function (e, n) {
        return (
            'group' === n.type
                ? e.push.apply(
                      e,
                      (0, l.Z)(
                          n.options.map(function (e) {
                              return {
                                  data: e.data,
                                  id: ''.concat(t, '-').concat(n.index, '-').concat(e.index)
                              };
                          })
                      )
                  )
                : e.push({
                      data: n.data,
                      id: ''.concat(t, '-').concat(n.index)
                  }),
            e
        );
    }, []);
}
function ee(e, t) {
    var n = e.inputValue,
        o = t.data,
        r = t.isSelected,
        i = t.label,
        a = t.value;
    return (
        (!es(e) || !r) &&
        ea(
            e,
            {
                label: i,
                value: a,
                data: o
            },
            void 0 === n ? '' : n
        )
    );
}
var et = function (e, t) {
        var n;
        return (
            (null ==
            (n = e.find(function (e) {
                return e.data === t;
            }))
                ? void 0
                : n.id) || null
        );
    },
    en = function (e, t) {
        return e.getOptionLabel(t);
    },
    eo = function (e, t) {
        return e.getOptionValue(t);
    };
function er(e, t, n) {
    return 'function' == typeof e.isOptionDisabled && e.isOptionDisabled(t, n);
}
function ei(e, t, n) {
    if (n.indexOf(t) > -1) return !0;
    if ('function' == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
    var o = eo(e, t);
    return n.some(function (t) {
        return eo(e, t) === o;
    });
}
function ea(e, t, n) {
    return !e.filterOption || e.filterOption(t, n);
}
var es = function (e) {
        var t = e.hideSelectedOptions,
            n = e.isMulti;
        return void 0 === t ? n : t;
    },
    eu = 1,
    el = (function (e) {
        (0, s.Z)(n, e);
        var t = (0, u.Z)(n);
        function n(e) {
            var o;
            if (
                ((0, i.Z)(this, n),
                ((o = t.call(this, e)).state = {
                    ariaSelection: null,
                    focusedOption: null,
                    focusedOptionId: null,
                    focusableOptionsWithIds: [],
                    focusedValue: null,
                    inputIsHidden: !1,
                    isFocused: !1,
                    selectValue: [],
                    clearFocusValueOnUpdate: !1,
                    prevWasFocused: !1,
                    inputIsHiddenAfterUpdate: void 0,
                    prevProps: void 0,
                    instancePrefix: ''
                }),
                (o.blockOptionHover = !1),
                (o.isComposing = !1),
                (o.commonProps = void 0),
                (o.initialTouchX = 0),
                (o.initialTouchY = 0),
                (o.openAfterFocus = !1),
                (o.scrollToFocusedOptionOnUpdate = !1),
                (o.userIsDragging = void 0),
                (o.isAppleDevice = _(/^Mac/i) || _(/^iPhone/i) || _(/^iPad/i) || (_(/^Mac/i) && navigator.maxTouchPoints > 1)),
                (o.controlRef = null),
                (o.getControlRef = function (e) {
                    o.controlRef = e;
                }),
                (o.focusedOptionRef = null),
                (o.getFocusedOptionRef = function (e) {
                    o.focusedOptionRef = e;
                }),
                (o.menuListRef = null),
                (o.getMenuListRef = function (e) {
                    o.menuListRef = e;
                }),
                (o.inputRef = null),
                (o.getInputRef = function (e) {
                    o.inputRef = e;
                }),
                (o.focus = o.focusInput),
                (o.blur = o.blurInput),
                (o.onChange = function (e, t) {
                    var n = o.props,
                        r = n.onChange;
                    (t.name = n.name), o.ariaOnChange(e, t), r(e, t);
                }),
                (o.setValue = function (e, t, n) {
                    var r = o.props,
                        i = r.closeMenuOnSelect,
                        a = r.isMulti,
                        s = r.inputValue;
                    o.onInputChange('', {
                        action: 'set-value',
                        prevInputValue: s
                    }),
                        i && (o.setState({ inputIsHiddenAfterUpdate: !a }), o.onMenuClose()),
                        o.setState({ clearFocusValueOnUpdate: !0 }),
                        o.onChange(e, {
                            action: t,
                            option: n
                        });
                }),
                (o.selectOption = function (e) {
                    var t = o.props,
                        n = t.blurInputOnSelect,
                        r = t.isMulti,
                        i = t.name,
                        a = o.state.selectValue,
                        s = r && o.isOptionSelected(e, a),
                        u = o.isOptionDisabled(e, a);
                    if (s) {
                        var c = o.getOptionValue(e);
                        o.setValue(
                            (0, d.B)(
                                a.filter(function (e) {
                                    return o.getOptionValue(e) !== c;
                                })
                            ),
                            'deselect-option',
                            e
                        );
                    } else {
                        if (u)
                            return void o.ariaOnChange((0, d.C)(e), {
                                action: 'select-option',
                                option: e,
                                name: i
                            });
                        r ? o.setValue((0, d.B)([].concat((0, l.Z)(a), [e])), 'select-option', e) : o.setValue((0, d.C)(e), 'select-option');
                    }
                    n && o.blurInput();
                }),
                (o.removeValue = function (e) {
                    var t = o.props.isMulti,
                        n = o.state.selectValue,
                        r = o.getOptionValue(e),
                        i = n.filter(function (e) {
                            return o.getOptionValue(e) !== r;
                        }),
                        a = (0, d.D)(t, i, i[0] || null);
                    o.onChange(a, {
                        action: 'remove-value',
                        removedValue: e
                    }),
                        o.focusInput();
                }),
                (o.clearValue = function () {
                    var e = o.state.selectValue;
                    o.onChange((0, d.D)(o.props.isMulti, [], null), {
                        action: 'clear',
                        removedValues: e
                    });
                }),
                (o.popValue = function () {
                    var e = o.props.isMulti,
                        t = o.state.selectValue,
                        n = t[t.length - 1],
                        r = t.slice(0, t.length - 1),
                        i = (0, d.D)(e, r, r[0] || null);
                    n &&
                        o.onChange(i, {
                            action: 'pop-value',
                            removedValue: n
                        });
                }),
                (o.getFocusedOptionId = function (e) {
                    return et(o.state.focusableOptionsWithIds, e);
                }),
                (o.getFocusableOptionsWithIds = function () {
                    return Q(Y(o.props, o.state.selectValue), o.getElementId('option'));
                }),
                (o.getValue = function () {
                    return o.state.selectValue;
                }),
                (o.cx = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d.E.apply(void 0, [o.props.classNamePrefix].concat(t));
                }),
                (o.getOptionLabel = function (e) {
                    return en(o.props, e);
                }),
                (o.getOptionValue = function (e) {
                    return eo(o.props, e);
                }),
                (o.getStyles = function (e, t) {
                    var n = o.props.unstyled,
                        r = W[e](t, n);
                    r.boxSizing = 'border-box';
                    var i = o.props.styles[e];
                    return i ? i(r, t) : r;
                }),
                (o.getClassNames = function (e, t) {
                    var n, r;
                    return null == (n = (r = o.props.classNames)[e]) ? void 0 : n.call(r, t);
                }),
                (o.getElementId = function (e) {
                    return ''.concat(o.state.instancePrefix, '-').concat(e);
                }),
                (o.getComponents = function () {
                    return (0, d.F)(o.props);
                }),
                (o.buildCategorizedOptions = function () {
                    return Y(o.props, o.state.selectValue);
                }),
                (o.getCategorizedOptions = function () {
                    return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
                }),
                (o.buildFocusableOptions = function () {
                    return X(o.buildCategorizedOptions());
                }),
                (o.getFocusableOptions = function () {
                    return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
                }),
                (o.ariaOnChange = function (e, t) {
                    o.setState({ ariaSelection: (0, r.Z)({ value: e }, t) });
                }),
                (o.onMenuMouseDown = function (e) {
                    0 === e.button && (e.stopPropagation(), e.preventDefault(), o.focusInput());
                }),
                (o.onMenuMouseMove = function (e) {
                    o.blockOptionHover = !1;
                }),
                (o.onControlMouseDown = function (e) {
                    if (!e.defaultPrevented) {
                        var t = o.props.openMenuOnClick;
                        o.state.isFocused ? (o.props.menuIsOpen ? 'INPUT' !== e.target.tagName && 'TEXTAREA' !== e.target.tagName && o.onMenuClose() : t && o.openMenu('first')) : (t && (o.openAfterFocus = !0), o.focusInput()), 'INPUT' !== e.target.tagName && 'TEXTAREA' !== e.target.tagName && e.preventDefault();
                    }
                }),
                (o.onDropdownIndicatorMouseDown = function (e) {
                    if ((!e || 'mousedown' !== e.type || 0 === e.button) && !o.props.isDisabled) {
                        var t = o.props,
                            n = t.isMulti,
                            r = t.menuIsOpen;
                        o.focusInput(), r ? (o.setState({ inputIsHiddenAfterUpdate: !n }), o.onMenuClose()) : o.openMenu('first'), e.preventDefault();
                    }
                }),
                (o.onClearIndicatorMouseDown = function (e) {
                    (e && 'mousedown' === e.type && 0 !== e.button) ||
                        (o.clearValue(),
                        e.preventDefault(),
                        (o.openAfterFocus = !1),
                        'touchend' === e.type
                            ? o.focusInput()
                            : setTimeout(function () {
                                  return o.focusInput();
                              }));
                }),
                (o.onScroll = function (e) {
                    'boolean' == typeof o.props.closeMenuOnScroll ? e.target instanceof HTMLElement && (0, d.G)(e.target) && o.props.onMenuClose() : 'function' == typeof o.props.closeMenuOnScroll && o.props.closeMenuOnScroll(e) && o.props.onMenuClose();
                }),
                (o.onCompositionStart = function () {
                    o.isComposing = !0;
                }),
                (o.onCompositionEnd = function () {
                    o.isComposing = !1;
                }),
                (o.onTouchStart = function (e) {
                    var t = e.touches,
                        n = t && t.item(0);
                    n && ((o.initialTouchX = n.clientX), (o.initialTouchY = n.clientY), (o.userIsDragging = !1));
                }),
                (o.onTouchMove = function (e) {
                    var t = e.touches,
                        n = t && t.item(0);
                    if (n) {
                        var r = Math.abs(n.clientX - o.initialTouchX),
                            i = Math.abs(n.clientY - o.initialTouchY);
                        o.userIsDragging = r > 5 || i > 5;
                    }
                }),
                (o.onTouchEnd = function (e) {
                    o.userIsDragging || (o.controlRef && !o.controlRef.contains(e.target) && o.menuListRef && !o.menuListRef.contains(e.target) && o.blurInput(), (o.initialTouchX = 0), (o.initialTouchY = 0));
                }),
                (o.onControlTouchEnd = function (e) {
                    o.userIsDragging || o.onControlMouseDown(e);
                }),
                (o.onClearIndicatorTouchEnd = function (e) {
                    o.userIsDragging || o.onClearIndicatorMouseDown(e);
                }),
                (o.onDropdownIndicatorTouchEnd = function (e) {
                    o.userIsDragging || o.onDropdownIndicatorMouseDown(e);
                }),
                (o.handleInputChange = function (e) {
                    var t = o.props.inputValue,
                        n = e.currentTarget.value;
                    o.setState({ inputIsHiddenAfterUpdate: !1 }),
                        o.onInputChange(n, {
                            action: 'input-change',
                            prevInputValue: t
                        }),
                        o.props.menuIsOpen || o.onMenuOpen();
                }),
                (o.onInputFocus = function (e) {
                    o.props.onFocus && o.props.onFocus(e),
                        o.setState({
                            inputIsHiddenAfterUpdate: !1,
                            isFocused: !0
                        }),
                        (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu('first'),
                        (o.openAfterFocus = !1);
                }),
                (o.onInputBlur = function (e) {
                    var t = o.props.inputValue;
                    if (o.menuListRef && o.menuListRef.contains(document.activeElement)) return void o.inputRef.focus();
                    o.props.onBlur && o.props.onBlur(e),
                        o.onInputChange('', {
                            action: 'input-blur',
                            prevInputValue: t
                        }),
                        o.onMenuClose(),
                        o.setState({
                            focusedValue: null,
                            isFocused: !1
                        });
                }),
                (o.onOptionHover = function (e) {
                    if (!o.blockOptionHover && o.state.focusedOption !== e) {
                        var t = o.getFocusableOptions().indexOf(e);
                        o.setState({
                            focusedOption: e,
                            focusedOptionId: t > -1 ? o.getFocusedOptionId(e) : null
                        });
                    }
                }),
                (o.shouldHideSelectedOptions = function () {
                    return es(o.props);
                }),
                (o.onValueInputFocus = function (e) {
                    e.preventDefault(), e.stopPropagation(), o.focus();
                }),
                (o.onKeyDown = function (e) {
                    var t = o.props,
                        n = t.isMulti,
                        r = t.backspaceRemovesValue,
                        i = t.escapeClearsValue,
                        a = t.inputValue,
                        s = t.isClearable,
                        u = t.isDisabled,
                        l = t.menuIsOpen,
                        c = t.onKeyDown,
                        d = t.tabSelectsValue,
                        p = t.openMenuOnFocus,
                        f = o.state,
                        h = f.focusedOption,
                        v = f.focusedValue,
                        m = f.selectValue;
                    if (!u) {
                        if ('function' == typeof c && (c(e), e.defaultPrevented)) return;
                        switch (((o.blockOptionHover = !0), e.key)) {
                            case 'ArrowLeft':
                                if (!n || a) return;
                                o.focusValue('previous');
                                break;
                            case 'ArrowRight':
                                if (!n || a) return;
                                o.focusValue('next');
                                break;
                            case 'Delete':
                            case 'Backspace':
                                if (a) return;
                                if (v) o.removeValue(v);
                                else {
                                    if (!r) return;
                                    n ? o.popValue() : s && o.clearValue();
                                }
                                break;
                            case 'Tab':
                                if (o.isComposing || e.shiftKey || !l || !d || !h || (p && o.isOptionSelected(h, m))) return;
                                o.selectOption(h);
                                break;
                            case 'Enter':
                                if (229 === e.keyCode) break;
                                if (l) {
                                    if (!h || o.isComposing) return;
                                    o.selectOption(h);
                                    break;
                                }
                                return;
                            case 'Escape':
                                l
                                    ? (o.setState({ inputIsHiddenAfterUpdate: !1 }),
                                      o.onInputChange('', {
                                          action: 'menu-close',
                                          prevInputValue: a
                                      }),
                                      o.onMenuClose())
                                    : s && i && o.clearValue();
                                break;
                            case ' ':
                                if (a) return;
                                if (!l) {
                                    o.openMenu('first');
                                    break;
                                }
                                if (!h) return;
                                o.selectOption(h);
                                break;
                            case 'ArrowUp':
                                l ? o.focusOption('up') : o.openMenu('last');
                                break;
                            case 'ArrowDown':
                                l ? o.focusOption('down') : o.openMenu('first');
                                break;
                            case 'PageUp':
                                if (!l) return;
                                o.focusOption('pageup');
                                break;
                            case 'PageDown':
                                if (!l) return;
                                o.focusOption('pagedown');
                                break;
                            case 'Home':
                                if (!l) return;
                                o.focusOption('first');
                                break;
                            case 'End':
                                if (!l) return;
                                o.focusOption('last');
                                break;
                            default:
                                return;
                        }
                        e.preventDefault();
                    }
                }),
                (o.state.instancePrefix = 'react-select-' + (o.props.instanceId || ++eu)),
                (o.state.selectValue = (0, d.H)(e.value)),
                e.menuIsOpen && o.state.selectValue.length)
            ) {
                var a = o.getFocusableOptionsWithIds(),
                    s = o.buildFocusableOptions(),
                    u = s.indexOf(o.state.selectValue[0]);
                (o.state.focusableOptionsWithIds = a), (o.state.focusedOption = s[u]), (o.state.focusedOptionId = et(a, s[u]));
            }
            return o;
        }
        return (
            (0, a.Z)(
                n,
                [
                    {
                        key: 'componentDidMount',
                        value: function () {
                            this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener('scroll', this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && (0, d.I)(this.menuListRef, this.focusedOptionRef);
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function (e) {
                            var t = this.props,
                                n = t.isDisabled,
                                o = t.menuIsOpen,
                                r = this.state.isFocused;
                            ((r && !n && e.isDisabled) || (r && o && !e.menuIsOpen)) && this.focusInput(), r && n && !e.isDisabled ? this.setState({ isFocused: !1 }, this.onMenuClose) : r || n || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({ isFocused: !0 }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && ((0, d.I)(this.menuListRef, this.focusedOptionRef), (this.scrollToFocusedOptionOnUpdate = !1));
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener('scroll', this.onScroll, !0);
                        }
                    },
                    {
                        key: 'onMenuOpen',
                        value: function () {
                            this.props.onMenuOpen();
                        }
                    },
                    {
                        key: 'onMenuClose',
                        value: function () {
                            this.onInputChange('', {
                                action: 'menu-close',
                                prevInputValue: this.props.inputValue
                            }),
                                this.props.onMenuClose();
                        }
                    },
                    {
                        key: 'onInputChange',
                        value: function (e, t) {
                            this.props.onInputChange(e, t);
                        }
                    },
                    {
                        key: 'focusInput',
                        value: function () {
                            this.inputRef && this.inputRef.focus();
                        }
                    },
                    {
                        key: 'blurInput',
                        value: function () {
                            this.inputRef && this.inputRef.blur();
                        }
                    },
                    {
                        key: 'openMenu',
                        value: function (e) {
                            var t = this,
                                n = this.state,
                                o = n.selectValue,
                                r = n.isFocused,
                                i = this.buildFocusableOptions(),
                                a = 'first' === e ? 0 : i.length - 1;
                            if (!this.props.isMulti) {
                                var s = i.indexOf(o[0]);
                                s > -1 && (a = s);
                            }
                            (this.scrollToFocusedOptionOnUpdate = !(r && this.menuListRef)),
                                this.setState(
                                    {
                                        inputIsHiddenAfterUpdate: !1,
                                        focusedValue: null,
                                        focusedOption: i[a],
                                        focusedOptionId: this.getFocusedOptionId(i[a])
                                    },
                                    function () {
                                        return t.onMenuOpen();
                                    }
                                );
                        }
                    },
                    {
                        key: 'focusValue',
                        value: function (e) {
                            var t = this.state,
                                n = t.selectValue,
                                o = t.focusedValue;
                            if (this.props.isMulti) {
                                this.setState({ focusedOption: null });
                                var r = n.indexOf(o);
                                o || (r = -1);
                                var i = n.length - 1,
                                    a = -1;
                                if (n.length) {
                                    switch (e) {
                                        case 'previous':
                                            a = 0 === r ? 0 : -1 === r ? i : r - 1;
                                            break;
                                        case 'next':
                                            r > -1 && r < i && (a = r + 1);
                                    }
                                    this.setState({
                                        inputIsHidden: -1 !== a,
                                        focusedValue: n[a]
                                    });
                                }
                            }
                        }
                    },
                    {
                        key: 'focusOption',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'first',
                                t = this.props.pageSize,
                                n = this.state.focusedOption,
                                o = this.getFocusableOptions();
                            if (o.length) {
                                var r = 0,
                                    i = o.indexOf(n);
                                n || (i = -1),
                                    'up' === e ? (r = i > 0 ? i - 1 : o.length - 1) : 'down' === e ? (r = (i + 1) % o.length) : 'pageup' === e ? (r = i - t) < 0 && (r = 0) : 'pagedown' === e ? (r = i + t) > o.length - 1 && (r = o.length - 1) : 'last' === e && (r = o.length - 1),
                                    (this.scrollToFocusedOptionOnUpdate = !0),
                                    this.setState({
                                        focusedOption: o[r],
                                        focusedValue: null,
                                        focusedOptionId: this.getFocusedOptionId(o[r])
                                    });
                            }
                        }
                    },
                    {
                        key: 'getTheme',
                        value: function () {
                            return this.props.theme ? ('function' == typeof this.props.theme ? this.props.theme(K) : (0, r.Z)((0, r.Z)({}, K), this.props.theme)) : K;
                        }
                    },
                    {
                        key: 'getCommonProps',
                        value: function () {
                            var e = this.clearValue,
                                t = this.cx,
                                n = this.getStyles,
                                o = this.getClassNames,
                                r = this.getValue,
                                i = this.selectOption,
                                a = this.setValue,
                                s = this.props,
                                u = s.isMulti,
                                l = s.isRtl,
                                c = s.options;
                            return {
                                clearValue: e,
                                cx: t,
                                getStyles: n,
                                getClassNames: o,
                                getValue: r,
                                hasValue: this.hasValue(),
                                isMulti: u,
                                isRtl: l,
                                options: c,
                                selectOption: i,
                                selectProps: s,
                                setValue: a,
                                theme: this.getTheme()
                            };
                        }
                    },
                    {
                        key: 'hasValue',
                        value: function () {
                            return this.state.selectValue.length > 0;
                        }
                    },
                    {
                        key: 'hasOptions',
                        value: function () {
                            return !!this.getFocusableOptions().length;
                        }
                    },
                    {
                        key: 'isClearable',
                        value: function () {
                            var e = this.props,
                                t = e.isClearable,
                                n = e.isMulti;
                            return void 0 === t ? n : t;
                        }
                    },
                    {
                        key: 'isOptionDisabled',
                        value: function (e, t) {
                            return er(this.props, e, t);
                        }
                    },
                    {
                        key: 'isOptionSelected',
                        value: function (e, t) {
                            return ei(this.props, e, t);
                        }
                    },
                    {
                        key: 'filterOption',
                        value: function (e, t) {
                            return ea(this.props, e, t);
                        }
                    },
                    {
                        key: 'formatOptionLabel',
                        value: function (e, t) {
                            if ('function' != typeof this.props.formatOptionLabel) return this.getOptionLabel(e);
                            var n = this.props.inputValue,
                                o = this.state.selectValue;
                            return this.props.formatOptionLabel(e, {
                                context: t,
                                inputValue: n,
                                selectValue: o
                            });
                        }
                    },
                    {
                        key: 'formatGroupLabel',
                        value: function (e) {
                            return this.props.formatGroupLabel(e);
                        }
                    },
                    {
                        key: 'startListeningComposition',
                        value: function () {
                            document && document.addEventListener && (document.addEventListener('compositionstart', this.onCompositionStart, !1), document.addEventListener('compositionend', this.onCompositionEnd, !1));
                        }
                    },
                    {
                        key: 'stopListeningComposition',
                        value: function () {
                            document && document.removeEventListener && (document.removeEventListener('compositionstart', this.onCompositionStart), document.removeEventListener('compositionend', this.onCompositionEnd));
                        }
                    },
                    {
                        key: 'startListeningToTouch',
                        value: function () {
                            document && document.addEventListener && (document.addEventListener('touchstart', this.onTouchStart, !1), document.addEventListener('touchmove', this.onTouchMove, !1), document.addEventListener('touchend', this.onTouchEnd, !1));
                        }
                    },
                    {
                        key: 'stopListeningToTouch',
                        value: function () {
                            document && document.removeEventListener && (document.removeEventListener('touchstart', this.onTouchStart), document.removeEventListener('touchmove', this.onTouchMove), document.removeEventListener('touchend', this.onTouchEnd));
                        }
                    },
                    {
                        key: 'renderInput',
                        value: function () {
                            var e = this.props,
                                t = e.isDisabled,
                                n = e.isSearchable,
                                i = e.inputId,
                                a = e.inputValue,
                                s = e.tabIndex,
                                u = e.form,
                                l = e.menuIsOpen,
                                p = e.required,
                                f = this.getComponents().Input,
                                h = this.state,
                                v = h.inputIsHidden,
                                m = h.ariaSelection,
                                g = this.commonProps,
                                b = i || this.getElementId('input'),
                                y = (0, r.Z)(
                                    (0, r.Z)(
                                        (0, r.Z)(
                                            {
                                                'aria-autocomplete': 'list',
                                                'aria-expanded': l,
                                                'aria-haspopup': !0,
                                                'aria-errormessage': this.props['aria-errormessage'],
                                                'aria-invalid': this.props['aria-invalid'],
                                                'aria-label': this.props['aria-label'],
                                                'aria-labelledby': this.props['aria-labelledby'],
                                                'aria-required': p,
                                                role: 'combobox',
                                                'aria-activedescendant': this.isAppleDevice ? void 0 : this.state.focusedOptionId || ''
                                            },
                                            l && { 'aria-controls': this.getElementId('listbox') }
                                        ),
                                        !n && { 'aria-readonly': !0 }
                                    ),
                                    this.hasValue() ? (null == m ? void 0 : m.action) === 'initial-input-focus' && { 'aria-describedby': this.getElementId('live-region') } : { 'aria-describedby': this.getElementId('placeholder') }
                                );
                            return n
                                ? c.createElement(
                                      f,
                                      (0, o.Z)(
                                          {},
                                          g,
                                          {
                                              autoCapitalize: 'none',
                                              autoComplete: 'off',
                                              autoCorrect: 'off',
                                              id: b,
                                              innerRef: this.getInputRef,
                                              isDisabled: t,
                                              isHidden: v,
                                              onBlur: this.onInputBlur,
                                              onChange: this.handleInputChange,
                                              onFocus: this.onInputFocus,
                                              spellCheck: 'false',
                                              tabIndex: s,
                                              form: u,
                                              type: 'text',
                                              value: a
                                          },
                                          y
                                      )
                                  )
                                : c.createElement(
                                      V,
                                      (0, o.Z)(
                                          {
                                              id: b,
                                              innerRef: this.getInputRef,
                                              onBlur: this.onInputBlur,
                                              onChange: d.J,
                                              onFocus: this.onInputFocus,
                                              disabled: t,
                                              tabIndex: s,
                                              inputMode: 'none',
                                              form: u,
                                              value: ''
                                          },
                                          y
                                      )
                                  );
                        }
                    },
                    {
                        key: 'renderPlaceholderOrValue',
                        value: function () {
                            var e = this,
                                t = this.getComponents(),
                                n = t.MultiValue,
                                r = t.MultiValueContainer,
                                i = t.MultiValueLabel,
                                a = t.MultiValueRemove,
                                s = t.SingleValue,
                                u = t.Placeholder,
                                l = this.commonProps,
                                d = this.props,
                                p = d.controlShouldRenderValue,
                                f = d.isDisabled,
                                h = d.isMulti,
                                v = d.inputValue,
                                m = d.placeholder,
                                g = this.state,
                                b = g.selectValue,
                                y = g.focusedValue,
                                O = g.isFocused;
                            if (!this.hasValue() || !p)
                                return v
                                    ? null
                                    : c.createElement(
                                          u,
                                          (0, o.Z)({}, l, {
                                              key: 'placeholder',
                                              isDisabled: f,
                                              isFocused: O,
                                              innerProps: { id: this.getElementId('placeholder') }
                                          }),
                                          m
                                      );
                            if (h)
                                return b.map(function (t, s) {
                                    var u = t === y,
                                        d = ''.concat(e.getOptionLabel(t), '-').concat(e.getOptionValue(t));
                                    return c.createElement(
                                        n,
                                        (0, o.Z)({}, l, {
                                            components: {
                                                Container: r,
                                                Label: i,
                                                Remove: a
                                            },
                                            isFocused: u,
                                            isDisabled: f,
                                            key: d,
                                            index: s,
                                            removeProps: {
                                                onClick: function () {
                                                    return e.removeValue(t);
                                                },
                                                onTouchEnd: function () {
                                                    return e.removeValue(t);
                                                },
                                                onMouseDown: function (e) {
                                                    e.preventDefault();
                                                }
                                            },
                                            data: t
                                        }),
                                        e.formatOptionLabel(t, 'value')
                                    );
                                });
                            if (v) return null;
                            var w = b[0];
                            return c.createElement(
                                s,
                                (0, o.Z)({}, l, {
                                    data: w,
                                    isDisabled: f
                                }),
                                this.formatOptionLabel(w, 'value')
                            );
                        }
                    },
                    {
                        key: 'renderClearIndicator',
                        value: function () {
                            var e = this.getComponents().ClearIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            if (!this.isClearable() || !e || r || !this.hasValue() || i) return null;
                            var s = {
                                onMouseDown: this.onClearIndicatorMouseDown,
                                onTouchEnd: this.onClearIndicatorTouchEnd,
                                'aria-hidden': 'true'
                            };
                            return c.createElement(
                                e,
                                (0, o.Z)({}, t, {
                                    innerProps: s,
                                    isFocused: a
                                })
                            );
                        }
                    },
                    {
                        key: 'renderLoadingIndicator',
                        value: function () {
                            var e = this.getComponents().LoadingIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            return e && i
                                ? c.createElement(
                                      e,
                                      (0, o.Z)({}, t, {
                                          innerProps: { 'aria-hidden': 'true' },
                                          isDisabled: r,
                                          isFocused: a
                                      })
                                  )
                                : null;
                        }
                    },
                    {
                        key: 'renderIndicatorSeparator',
                        value: function () {
                            var e = this.getComponents(),
                                t = e.DropdownIndicator,
                                n = e.IndicatorSeparator;
                            if (!t || !n) return null;
                            var r = this.commonProps,
                                i = this.props.isDisabled,
                                a = this.state.isFocused;
                            return c.createElement(
                                n,
                                (0, o.Z)({}, r, {
                                    isDisabled: i,
                                    isFocused: a
                                })
                            );
                        }
                    },
                    {
                        key: 'renderDropdownIndicator',
                        value: function () {
                            var e = this.getComponents().DropdownIndicator;
                            if (!e) return null;
                            var t = this.commonProps,
                                n = this.props.isDisabled,
                                r = this.state.isFocused,
                                i = {
                                    onMouseDown: this.onDropdownIndicatorMouseDown,
                                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                                    'aria-hidden': 'true'
                                };
                            return c.createElement(
                                e,
                                (0, o.Z)({}, t, {
                                    innerProps: i,
                                    isDisabled: n,
                                    isFocused: r
                                })
                            );
                        }
                    },
                    {
                        key: 'renderMenu',
                        value: function () {
                            var e,
                                t = this,
                                n = this.getComponents(),
                                r = n.Group,
                                i = n.GroupHeading,
                                a = n.Menu,
                                s = n.MenuList,
                                u = n.MenuPortal,
                                l = n.LoadingMessage,
                                p = n.NoOptionsMessage,
                                f = n.Option,
                                h = this.commonProps,
                                v = this.state.focusedOption,
                                m = this.props,
                                g = m.captureMenuScroll,
                                b = m.inputValue,
                                y = m.isLoading,
                                O = m.loadingMessage,
                                w = m.minMenuHeight,
                                x = m.maxMenuHeight,
                                Z = m.menuIsOpen,
                                C = m.menuPlacement,
                                S = m.menuPosition,
                                M = m.menuPortalTarget,
                                I = m.menuShouldBlockScroll,
                                E = m.menuShouldScrollIntoView,
                                k = m.noOptionsMessage,
                                V = m.onMenuScrollToTop,
                                R = m.onMenuScrollToBottom;
                            if (!Z) return null;
                            var P = function (e, n) {
                                var r = e.type,
                                    i = e.data,
                                    a = e.isDisabled,
                                    s = e.isSelected,
                                    u = e.label,
                                    l = e.value,
                                    d = v === i,
                                    p = a
                                        ? void 0
                                        : function () {
                                              return t.onOptionHover(i);
                                          },
                                    m = a
                                        ? void 0
                                        : function () {
                                              return t.selectOption(i);
                                          },
                                    g = ''.concat(t.getElementId('option'), '-').concat(n),
                                    b = {
                                        id: g,
                                        onClick: m,
                                        onMouseMove: p,
                                        onMouseOver: p,
                                        tabIndex: -1,
                                        role: 'option',
                                        'aria-selected': t.isAppleDevice ? void 0 : s
                                    };
                                return c.createElement(
                                    f,
                                    (0, o.Z)({}, h, {
                                        innerProps: b,
                                        data: i,
                                        isDisabled: a,
                                        isSelected: s,
                                        key: g,
                                        label: u,
                                        type: r,
                                        value: l,
                                        isFocused: d,
                                        innerRef: d ? t.getFocusedOptionRef : void 0
                                    }),
                                    t.formatOptionLabel(e.data, 'menu')
                                );
                            };
                            if (this.hasOptions())
                                e = this.getCategorizedOptions().map(function (e) {
                                    if ('group' === e.type) {
                                        var n = e.data,
                                            a = e.options,
                                            s = e.index,
                                            u = ''.concat(t.getElementId('group'), '-').concat(s),
                                            l = ''.concat(u, '-heading');
                                        return c.createElement(
                                            r,
                                            (0, o.Z)({}, h, {
                                                key: u,
                                                data: n,
                                                options: a,
                                                Heading: i,
                                                headingProps: {
                                                    id: l,
                                                    data: e.data
                                                },
                                                label: t.formatGroupLabel(e.data)
                                            }),
                                            e.options.map(function (e) {
                                                return P(e, ''.concat(s, '-').concat(e.index));
                                            })
                                        );
                                    }
                                    if ('option' === e.type) return P(e, ''.concat(e.index));
                                });
                            else if (y) {
                                var D = O({ inputValue: b });
                                if (null === D) return null;
                                e = c.createElement(l, h, D);
                            } else {
                                var F = k({ inputValue: b });
                                if (null === F) return null;
                                e = c.createElement(p, h, F);
                            }
                            var L = {
                                    minMenuHeight: w,
                                    maxMenuHeight: x,
                                    menuPlacement: C,
                                    menuPosition: S,
                                    menuShouldScrollIntoView: E
                                },
                                T = c.createElement(d.M, (0, o.Z)({}, h, L), function (n) {
                                    var r = n.ref,
                                        i = n.placerProps,
                                        u = i.placement,
                                        l = i.maxHeight;
                                    return c.createElement(
                                        a,
                                        (0, o.Z)({}, h, L, {
                                            innerRef: r,
                                            innerProps: {
                                                onMouseDown: t.onMenuMouseDown,
                                                onMouseMove: t.onMenuMouseMove
                                            },
                                            isLoading: y,
                                            placement: u
                                        }),
                                        c.createElement(
                                            U,
                                            {
                                                captureEnabled: g,
                                                onTopArrive: V,
                                                onBottomArrive: R,
                                                lockEnabled: I
                                            },
                                            function (n) {
                                                return c.createElement(
                                                    s,
                                                    (0, o.Z)({}, h, {
                                                        innerRef: function (e) {
                                                            t.getMenuListRef(e), n(e);
                                                        },
                                                        innerProps: {
                                                            role: 'listbox',
                                                            'aria-multiselectable': h.isMulti,
                                                            id: t.getElementId('listbox')
                                                        },
                                                        isLoading: y,
                                                        maxHeight: l,
                                                        focusedOption: v
                                                    }),
                                                    e
                                                );
                                            }
                                        )
                                    );
                                });
                            return M || 'fixed' === S
                                ? c.createElement(
                                      u,
                                      (0, o.Z)({}, h, {
                                          appendTo: M,
                                          controlElement: this.controlRef,
                                          menuPlacement: C,
                                          menuPosition: S
                                      }),
                                      T
                                  )
                                : T;
                        }
                    },
                    {
                        key: 'renderFormField',
                        value: function () {
                            var e = this,
                                t = this.props,
                                n = t.delimiter,
                                o = t.isDisabled,
                                r = t.isMulti,
                                i = t.name,
                                a = t.required,
                                s = this.state.selectValue;
                            if (a && !this.hasValue() && !o)
                                return c.createElement(B, {
                                    name: i,
                                    onFocus: this.onValueInputFocus
                                });
                            if (i && !o)
                                if (r)
                                    if (n) {
                                        var u = s
                                            .map(function (t) {
                                                return e.getOptionValue(t);
                                            })
                                            .join(n);
                                        return c.createElement('input', {
                                            name: i,
                                            type: 'hidden',
                                            value: u
                                        });
                                    } else {
                                        var l =
                                            s.length > 0
                                                ? s.map(function (t, n) {
                                                      return c.createElement('input', {
                                                          key: 'i-'.concat(n),
                                                          name: i,
                                                          type: 'hidden',
                                                          value: e.getOptionValue(t)
                                                      });
                                                  })
                                                : c.createElement('input', {
                                                      name: i,
                                                      type: 'hidden',
                                                      value: ''
                                                  });
                                        return c.createElement('div', null, l);
                                    }
                                else {
                                    var d = s[0] ? this.getOptionValue(s[0]) : '';
                                    return c.createElement('input', {
                                        name: i,
                                        type: 'hidden',
                                        value: d
                                    });
                                }
                        }
                    },
                    {
                        key: 'renderLiveRegion',
                        value: function () {
                            var e = this.commonProps,
                                t = this.state,
                                n = t.ariaSelection,
                                r = t.focusedOption,
                                i = t.focusedValue,
                                a = t.isFocused,
                                s = t.selectValue,
                                u = this.getFocusableOptions();
                            return c.createElement(
                                b,
                                (0, o.Z)({}, e, {
                                    id: this.getElementId('live-region'),
                                    ariaSelection: n,
                                    focusedOption: r,
                                    focusedValue: i,
                                    isFocused: a,
                                    selectValue: s,
                                    focusableOptions: u,
                                    isAppleDevice: this.isAppleDevice
                                })
                            );
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var e = this.getComponents(),
                                t = e.Control,
                                n = e.IndicatorsContainer,
                                r = e.SelectContainer,
                                i = e.ValueContainer,
                                a = this.props,
                                s = a.className,
                                u = a.id,
                                l = a.isDisabled,
                                d = a.menuIsOpen,
                                p = this.state.isFocused,
                                f = (this.commonProps = this.getCommonProps());
                            return c.createElement(
                                r,
                                (0, o.Z)({}, f, {
                                    className: s,
                                    innerProps: {
                                        id: u,
                                        onKeyDown: this.onKeyDown
                                    },
                                    isDisabled: l,
                                    isFocused: p
                                }),
                                this.renderLiveRegion(),
                                c.createElement(
                                    t,
                                    (0, o.Z)({}, f, {
                                        innerRef: this.getControlRef,
                                        innerProps: {
                                            onMouseDown: this.onControlMouseDown,
                                            onTouchEnd: this.onControlTouchEnd
                                        },
                                        isDisabled: l,
                                        isFocused: p,
                                        menuIsOpen: d
                                    }),
                                    c.createElement(i, (0, o.Z)({}, f, { isDisabled: l }), this.renderPlaceholderOrValue(), this.renderInput()),
                                    c.createElement(n, (0, o.Z)({}, f, { isDisabled: l }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())
                                ),
                                this.renderMenu(),
                                this.renderFormField()
                            );
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            var n = t.prevProps,
                                o = t.clearFocusValueOnUpdate,
                                i = t.inputIsHiddenAfterUpdate,
                                a = t.ariaSelection,
                                s = t.isFocused,
                                u = t.prevWasFocused,
                                l = t.instancePrefix,
                                c = e.options,
                                p = e.value,
                                f = e.menuIsOpen,
                                h = e.inputValue,
                                v = e.isMulti,
                                m = (0, d.H)(p),
                                g = {};
                            if (n && (p !== n.value || c !== n.options || f !== n.menuIsOpen || h !== n.inputValue)) {
                                var b,
                                    y = f ? X(Y(e, m)) : [],
                                    O = f ? Q(Y(e, m), ''.concat(l, '-option')) : [],
                                    w = o
                                        ? (function (e, t) {
                                              var n = e.focusedValue,
                                                  o = e.selectValue.indexOf(n);
                                              if (o > -1) {
                                                  if (t.indexOf(n) > -1) return n;
                                                  if (o < t.length) return t[o];
                                              }
                                              return null;
                                          })(t, m)
                                        : null,
                                    x = (b = t.focusedOption) && y.indexOf(b) > -1 ? b : y[0],
                                    Z = et(O, x);
                                g = {
                                    selectValue: m,
                                    focusedOption: x,
                                    focusedOptionId: Z,
                                    focusableOptionsWithIds: O,
                                    focusedValue: w,
                                    clearFocusValueOnUpdate: !1
                                };
                            }
                            var C =
                                    null != i && e !== n
                                        ? {
                                              inputIsHidden: i,
                                              inputIsHiddenAfterUpdate: void 0
                                          }
                                        : {},
                                S = a,
                                M = s && u;
                            return (
                                s &&
                                    !M &&
                                    ((S = {
                                        value: (0, d.D)(v, m, m[0] || null),
                                        options: m,
                                        action: 'initial-input-focus'
                                    }),
                                    (M = !u)),
                                (null == a ? void 0 : a.action) === 'initial-input-focus' && (S = null),
                                (0, r.Z)(
                                    (0, r.Z)((0, r.Z)({}, g), C),
                                    {},
                                    {
                                        prevProps: e,
                                        ariaSelection: S,
                                        prevWasFocused: M
                                    }
                                )
                            );
                        }
                    }
                ]
            ),
            n
        );
    })(c.Component);
el.defaultProps = q;
