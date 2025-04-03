r.d(t, { Z: () => c });
var a = r(621028),
    n = r(667929),
    s = r(395043);
function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? o(Object(r), !0).forEach(function (t) {
                  (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
let c = (0, n.t7)(
    function (e) {
        var t = {
            BACKGROUND_COLOR: e.base00,
            TEXT_COLOR: e.base07,
            STRING_COLOR: e.base0B,
            DATE_COLOR: e.base0B,
            NUMBER_COLOR: e.base09,
            BOOLEAN_COLOR: e.base09,
            NULL_COLOR: e.base08,
            UNDEFINED_COLOR: e.base08,
            FUNCTION_COLOR: e.base08,
            SYMBOL_COLOR: e.base08,
            LABEL_COLOR: e.base0D,
            ARROW_COLOR: e.base0D,
            ITEM_STRING_COLOR: e.base0B,
            ITEM_STRING_EXPANDED_COLOR: e.base03
        };
        return {
            tree: {
                border: 0,
                padding: 0,
                marginTop: '0.5em',
                marginBottom: '0.5em',
                marginLeft: '0.125em',
                marginRight: 0,
                listStyle: 'none',
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
                backgroundColor: t.BACKGROUND_COLOR
            },
            value: function (e, t, r) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            paddingTop: '0.25em',
                            paddingRight: 0,
                            marginLeft: '0.875em',
                            WebkitUserSelect: 'text',
                            MozUserSelect: 'text',
                            wordWrap: 'break-word',
                            paddingLeft: r.length > 1 ? '2.125em' : '1.25em',
                            textIndent: '-0.5em',
                            wordBreak: 'break-all'
                        }
                    )
                };
            },
            label: {
                display: 'inline-block',
                color: t.LABEL_COLOR
            },
            valueLabel: { margin: '0 0.5em 0 0' },
            valueText: function (e, r) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            color: {
                                String: t.STRING_COLOR,
                                Date: t.DATE_COLOR,
                                Number: t.NUMBER_COLOR,
                                Boolean: t.BOOLEAN_COLOR,
                                Null: t.NULL_COLOR,
                                Undefined: t.UNDEFINED_COLOR,
                                Function: t.FUNCTION_COLOR,
                                Symbol: t.SYMBOL_COLOR
                            }[r]
                        }
                    )
                };
            },
            itemRange: function (e, r) {
                return {
                    style: {
                        paddingTop: r ? 0 : '0.25em',
                        cursor: 'pointer',
                        color: t.LABEL_COLOR
                    }
                };
            },
            arrow: function (e, t, r) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            marginLeft: 0,
                            transition: '150ms',
                            WebkitTransition: '150ms',
                            MozTransition: '150ms',
                            WebkitTransform: r ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                            MozTransform: r ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                            transform: r ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                            transformOrigin: '45% 50%',
                            WebkitTransformOrigin: '45% 50%',
                            MozTransformOrigin: '45% 50%',
                            position: 'relative',
                            lineHeight: '1.1em',
                            fontSize: '0.75em'
                        }
                    )
                };
            },
            arrowContainer: function (e, t) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            display: 'inline-block',
                            paddingRight: '0.5em',
                            paddingLeft: 'double' === t ? '1em' : 0,
                            cursor: 'pointer'
                        }
                    )
                };
            },
            arrowSign: { color: t.ARROW_COLOR },
            arrowSignInner: {
                position: 'absolute',
                top: 0,
                left: '-0.4em'
            },
            nestedNode: function (e, t, r, a, n) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            position: 'relative',
                            paddingTop: '0.25em',
                            marginLeft: t.length > 1 ? '0.875em' : 0,
                            paddingLeft: n ? 0 : '1.125em'
                        }
                    )
                };
            },
            rootNode: {
                padding: 0,
                margin: 0
            },
            nestedNodeLabel: function (e, t, r, a, n) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            margin: 0,
                            padding: 0,
                            WebkitUserSelect: n ? 'inherit' : 'text',
                            MozUserSelect: n ? 'inherit' : 'text',
                            cursor: n ? 'pointer' : 'default'
                        }
                    )
                };
            },
            nestedNodeItemString: function (e, r, a, n) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            paddingLeft: '0.5em',
                            cursor: 'default',
                            color: n ? t.ITEM_STRING_EXPANDED_COLOR : t.ITEM_STRING_COLOR
                        }
                    )
                };
            },
            nestedNodeItemType: {
                marginLeft: '0.3em',
                marginRight: '0.3em'
            },
            nestedNodeChildren: function (e, t, r) {
                return {
                    style: i(
                        i({}, e.style),
                        {},
                        {
                            padding: 0,
                            margin: 0,
                            listStyle: 'none',
                            display: r ? 'block' : 'none'
                        }
                    )
                };
            },
            rootNodeChildren: {
                padding: 0,
                margin: 0,
                listStyle: 'none'
            }
        };
    },
    { defaultBase16: s.Z }
);
