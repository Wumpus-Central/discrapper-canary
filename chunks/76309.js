var n = r(381538);
function i() {
    return (i =
        n ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }).apply(this, arguments);
}
function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                u(t, e, r[e]);
            });
    }
    return t;
}
function a(t) {
    if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function u(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = r),
        t
    );
}
function s(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
}
var c = r(697352),
    l = r(265755),
    f = r(282814),
    p = r(130580),
    h = r(350058),
    d = r(364127),
    g = r(16038),
    y = r(109767),
    v = r(620983),
    m = r(133092),
    _ = r(192379),
    b = r(1231),
    S = r(292489),
    w = r(169774),
    x = r(606166),
    k = r(344751),
    E = r(593121),
    C = r(685536),
    D = r(218675),
    O = r(581079),
    K = r(680566),
    T = r(467159),
    M = w.isBrowser('IE'),
    A = !M,
    I = {
        edit: d,
        composite: f,
        drag: h,
        cut: null,
        render: null
    },
    B = !1,
    L = (function (t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        s(e, t);
        var r = e.prototype;
        return (
            (r.render = function () {
                return null;
            }),
            (r.componentDidMount = function () {
                this._update();
            }),
            (r.componentDidUpdate = function () {
                this._update();
            }),
            (r._update = function () {
                var t = this.props.editor;
                (t._latestEditorState = this.props.editorState), (t._blockSelectEvents = !0);
            }),
            e
        );
    })(_.Component),
    R = (function (t) {
        function e(e) {
            var r;
            return (
                u(a((r = t.call(this, e) || this)), '_blockSelectEvents', void 0),
                u(a(r), '_clipboard', void 0),
                u(a(r), '_handler', void 0),
                u(a(r), '_dragCount', void 0),
                u(a(r), '_internalDrag', void 0),
                u(a(r), '_editorKey', void 0),
                u(a(r), '_placeholderAccessibilityID', void 0),
                u(a(r), '_latestEditorState', void 0),
                u(a(r), '_latestCommittedEditorState', void 0),
                u(a(r), '_pendingStateFromBeforeInput', void 0),
                u(a(r), '_onBeforeInput', void 0),
                u(a(r), '_onBlur', void 0),
                u(a(r), '_onCharacterData', void 0),
                u(a(r), '_onCompositionEnd', void 0),
                u(a(r), '_onCompositionStart', void 0),
                u(a(r), '_onCopy', void 0),
                u(a(r), '_onCut', void 0),
                u(a(r), '_onDragEnd', void 0),
                u(a(r), '_onDragOver', void 0),
                u(a(r), '_onDragStart', void 0),
                u(a(r), '_onDrop', void 0),
                u(a(r), '_onInput', void 0),
                u(a(r), '_onFocus', void 0),
                u(a(r), '_onKeyDown', void 0),
                u(a(r), '_onKeyPress', void 0),
                u(a(r), '_onKeyUp', void 0),
                u(a(r), '_onMouseDown', void 0),
                u(a(r), '_onMouseUp', void 0),
                u(a(r), '_onPaste', void 0),
                u(a(r), '_onSelect', void 0),
                u(a(r), 'editor', void 0),
                u(a(r), 'editorContainer', void 0),
                u(a(r), 'focus', void 0),
                u(a(r), 'blur', void 0),
                u(a(r), 'setMode', void 0),
                u(a(r), 'exitCurrentMode', void 0),
                u(a(r), 'restoreEditorDOM', void 0),
                u(a(r), 'setClipboard', void 0),
                u(a(r), 'getClipboard', void 0),
                u(a(r), 'getEditorKey', void 0),
                u(a(r), 'update', void 0),
                u(a(r), 'onDragEnter', void 0),
                u(a(r), 'onDragLeave', void 0),
                u(a(r), '_handleEditorContainerRef', function (t) {
                    (r.editorContainer = t), (r.editor = null !== t ? t.firstChild : null);
                }),
                u(a(r), 'focus', function (t) {
                    var e = r.props.editorState,
                        n = e.getSelection().getHasFocus(),
                        i = r.editor;
                    if (i) {
                        var o = S.getScrollParent(i),
                            a = t || C(o),
                            u = a.x,
                            s = a.y;
                        K(i) || O(!1), i.focus(), o === window ? window.scrollTo(u, s) : b.setTop(o, s), n || r.update(m.forceSelection(e, e.getSelection()));
                    }
                }),
                u(a(r), 'blur', function () {
                    var t = r.editor;
                    t && (K(t) || O(!1), t.blur());
                }),
                u(a(r), 'setMode', function (t) {
                    var e = r.props,
                        n = e.onPaste,
                        i = e.onCut,
                        a = e.onCopy,
                        u = o({}, I.edit);
                    n && (u.onPaste = n), i && (u.onCut = i), a && (u.onCopy = a), (r._handler = o({}, I, { edit: u })[t]);
                }),
                u(a(r), 'exitCurrentMode', function () {
                    r.setMode('edit');
                }),
                u(a(r), 'restoreEditorDOM', function (t) {
                    r.setState({ contentsKey: r.state.contentsKey + 1 }, function () {
                        r.focus(t);
                    });
                }),
                u(a(r), 'setClipboard', function (t) {
                    r._clipboard = t;
                }),
                u(a(r), 'getClipboard', function () {
                    return r._clipboard;
                }),
                u(a(r), 'update', function (t) {
                    (r._latestEditorState = t), r.props.onChange(t);
                }),
                u(a(r), 'onDragEnter', function () {
                    r._dragCount++;
                }),
                u(a(r), 'onDragLeave', function () {
                    r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
                }),
                (r._blockSelectEvents = !1),
                (r._clipboard = null),
                (r._handler = null),
                (r._dragCount = 0),
                (r._editorKey = e.editorKey || k()),
                (r._placeholderAccessibilityID = 'placeholder-' + r._editorKey),
                (r._latestEditorState = e.editorState),
                (r._latestCommittedEditorState = e.editorState),
                (r._onBeforeInput = r._buildHandler('onBeforeInput')),
                (r._onBlur = r._buildHandler('onBlur')),
                (r._onCharacterData = r._buildHandler('onCharacterData')),
                (r._onCompositionEnd = r._buildHandler('onCompositionEnd')),
                (r._onCompositionStart = r._buildHandler('onCompositionStart')),
                (r._onCopy = r._buildHandler('onCopy')),
                (r._onCut = r._buildHandler('onCut')),
                (r._onDragEnd = r._buildHandler('onDragEnd')),
                (r._onDragOver = r._buildHandler('onDragOver')),
                (r._onDragStart = r._buildHandler('onDragStart')),
                (r._onDrop = r._buildHandler('onDrop')),
                (r._onInput = r._buildHandler('onInput')),
                (r._onFocus = r._buildHandler('onFocus')),
                (r._onKeyDown = r._buildHandler('onKeyDown')),
                (r._onKeyPress = r._buildHandler('onKeyPress')),
                (r._onKeyUp = r._buildHandler('onKeyUp')),
                (r._onMouseDown = r._buildHandler('onMouseDown')),
                (r._onMouseUp = r._buildHandler('onMouseUp')),
                (r._onPaste = r._buildHandler('onPaste')),
                (r._onSelect = r._buildHandler('onSelect')),
                (r.getEditorKey = function () {
                    return r._editorKey;
                }),
                (r.state = { contentsKey: 0 }),
                r
            );
        }
        s(e, t);
        var n = e.prototype;
        return (
            (n._buildHandler = function (t) {
                var e = this;
                return function (r) {
                    if (!e.props.readOnly) {
                        var n = e._handler && e._handler[t];
                        n &&
                            (g
                                ? g(function () {
                                      return n(e, r);
                                  })
                                : n(e, r));
                    }
                };
            }),
            (n._showPlaceholder = function () {
                return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
            }),
            (n._renderPlaceholder = function () {
                if (this._showPlaceholder()) {
                    var t = {
                        text: T(this.props.placeholder),
                        editorState: this.props.editorState,
                        textAlignment: this.props.textAlignment,
                        accessibilityID: this._placeholderAccessibilityID
                    };
                    return _.createElement(y, t);
                }
                return null;
            }),
            (n.render = function () {
                var t = this.props,
                    e = t.blockRenderMap,
                    r = t.blockRendererFn,
                    n = t.blockStyleFn,
                    a = t.customStyleFn,
                    u = t.customStyleMap,
                    s = t.editorState,
                    c = t.preventScroll,
                    f = t.readOnly,
                    h = t.textAlignment,
                    d = t.textDirectionality,
                    g = x({
                        'DraftEditor/root': !0,
                        'DraftEditor/alignLeft': 'left' === h,
                        'DraftEditor/alignRight': 'right' === h,
                        'DraftEditor/alignCenter': 'center' === h
                    }),
                    y = this.props.role || 'textbox',
                    v = 'combobox' === y ? !!this.props.ariaExpanded : null,
                    m = {
                        blockRenderMap: e,
                        blockRendererFn: r,
                        blockStyleFn: n,
                        customStyleMap: o({}, l, u),
                        customStyleFn: a,
                        editorKey: this._editorKey,
                        editorState: s,
                        preventScroll: c,
                        textDirectionality: d
                    };
                return _.createElement(
                    'div',
                    { className: g },
                    this._renderPlaceholder(),
                    _.createElement(
                        'div',
                        {
                            className: x('DraftEditor/editorContainer'),
                            ref: this._handleEditorContainerRef
                        },
                        _.createElement(
                            'div',
                            {
                                'aria-activedescendant': f ? null : this.props.ariaActiveDescendantID,
                                'aria-autocomplete': f ? null : this.props.ariaAutoComplete,
                                'aria-controls': f ? null : this.props.ariaControls,
                                'aria-describedby': this.props.ariaDescribedBy || this._placeholderAccessibilityID,
                                'aria-expanded': f ? null : v,
                                'aria-label': this.props.ariaLabel,
                                'aria-labelledby': this.props.ariaLabelledBy,
                                'aria-multiline': this.props.ariaMultiline,
                                'aria-owns': f ? null : this.props.ariaOwneeID,
                                autoCapitalize: this.props.autoCapitalize,
                                autoComplete: this.props.autoComplete,
                                autoCorrect: this.props.autoCorrect,
                                className: x({
                                    notranslate: !f,
                                    'public/DraftEditor/content': !0
                                }),
                                contentEditable: !f,
                                'data-testid': this.props.webDriverTestID,
                                onBeforeInput: this._onBeforeInput,
                                onBlur: this._onBlur,
                                onCompositionEnd: this._onCompositionEnd,
                                onCompositionStart: this._onCompositionStart,
                                onCopy: this._onCopy,
                                onCut: this._onCut,
                                onDragEnd: this._onDragEnd,
                                onDragEnter: this.onDragEnter,
                                onDragLeave: this.onDragLeave,
                                onDragOver: this._onDragOver,
                                onDragStart: this._onDragStart,
                                onDrop: this._onDrop,
                                onFocus: this._onFocus,
                                onInput: this._onInput,
                                onKeyDown: this._onKeyDown,
                                onKeyPress: this._onKeyPress,
                                onKeyUp: this._onKeyUp,
                                onMouseUp: this._onMouseUp,
                                onPaste: this._onPaste,
                                onSelect: this._onSelect,
                                ref: this.props.editorRef,
                                role: f ? null : y,
                                spellCheck: A && this.props.spellCheck,
                                style: {
                                    outline: 'none',
                                    userSelect: 'text',
                                    WebkitUserSelect: 'text',
                                    whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word'
                                },
                                suppressContentEditableWarning: !0,
                                tabIndex: this.props.tabIndex
                            },
                            _.createElement(L, {
                                editor: this,
                                editorState: s
                            }),
                            _.createElement(p, i({}, m, { key: 'contents' + this.state.contentsKey }))
                        )
                    )
                );
            }),
            (n.componentDidMount = function () {
                (this._blockSelectEvents = !1), !B && D('draft_ods_enabled') && ((B = !0), v.initODS()), this.setMode('edit'), M && (this.editor ? this.editor.ownerDocument.execCommand('AutoUrlDetect', !1, !1) : r.g.execCommand('AutoUrlDetect', !1, !1));
            }),
            (n.componentDidUpdate = function () {
                (this._blockSelectEvents = !1), (this._latestEditorState = this.props.editorState), (this._latestCommittedEditorState = this.props.editorState);
            }),
            e
        );
    })(_.Component);
u(R, 'defaultProps', {
    blockRenderMap: c,
    blockRendererFn: function () {
        return null;
    },
    blockStyleFn: function () {
        return '';
    },
    keyBindingFn: E,
    readOnly: !1,
    spellCheck: !1,
    stripPastedStyles: !1
}),
    (t.exports = R);
