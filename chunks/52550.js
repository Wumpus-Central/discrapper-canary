var r = n(724039);
function i() {
    return (i =
        r ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var c = n(611668),
    u = n(955043),
    d = n(212453),
    f = n(887808),
    p = n(327229),
    _ = n(727055),
    h = n(298379),
    m = n(417159),
    g = n(934886),
    E = n(869639),
    b = n(64700),
    y = n(251577),
    O = n(448567),
    A = n(573750),
    v = n(550835),
    S = n(279998),
    I = n(673776),
    T = n(423856),
    C = n(661551),
    N = n(797686),
    R = n(537578),
    w = n(670200),
    P = A.isBrowser("IE"),
    D = !P,
    x = {
        edit: _,
        composite: d,
        drag: p,
        cut: null,
        render: null,
    },
    L = !1,
    j = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        l(t, e);
        var n = t.prototype;
        return (
            (n.render = function () {
                return null;
            }),
            (n.componentDidMount = function () {
                this._update();
            }),
            (n.componentDidUpdate = function () {
                this._update();
            }),
            (n._update = function () {
                var e = this.props.editor;
                (e._latestEditorState = this.props.editorState), (e._blockSelectEvents = !0);
            }),
            t
        );
    })(b.Component),
    M = (function (e) {
        function t(t) {
            var n;
            return (
                o(s((n = e.call(this, t) || this)), "_blockSelectEvents", void 0),
                o(s(n), "_clipboard", void 0),
                o(s(n), "_handler", void 0),
                o(s(n), "_dragCount", void 0),
                o(s(n), "_internalDrag", void 0),
                o(s(n), "_editorKey", void 0),
                o(s(n), "_placeholderAccessibilityID", void 0),
                o(s(n), "_latestEditorState", void 0),
                o(s(n), "_latestCommittedEditorState", void 0),
                o(s(n), "_pendingStateFromBeforeInput", void 0),
                o(s(n), "_onBeforeInput", void 0),
                o(s(n), "_onBlur", void 0),
                o(s(n), "_onCharacterData", void 0),
                o(s(n), "_onCompositionEnd", void 0),
                o(s(n), "_onCompositionStart", void 0),
                o(s(n), "_onCopy", void 0),
                o(s(n), "_onCut", void 0),
                o(s(n), "_onDragEnd", void 0),
                o(s(n), "_onDragOver", void 0),
                o(s(n), "_onDragStart", void 0),
                o(s(n), "_onDrop", void 0),
                o(s(n), "_onInput", void 0),
                o(s(n), "_onFocus", void 0),
                o(s(n), "_onKeyDown", void 0),
                o(s(n), "_onKeyPress", void 0),
                o(s(n), "_onKeyUp", void 0),
                o(s(n), "_onMouseDown", void 0),
                o(s(n), "_onMouseUp", void 0),
                o(s(n), "_onPaste", void 0),
                o(s(n), "_onSelect", void 0),
                o(s(n), "editor", void 0),
                o(s(n), "editorContainer", void 0),
                o(s(n), "focus", void 0),
                o(s(n), "blur", void 0),
                o(s(n), "setMode", void 0),
                o(s(n), "exitCurrentMode", void 0),
                o(s(n), "restoreEditorDOM", void 0),
                o(s(n), "setClipboard", void 0),
                o(s(n), "getClipboard", void 0),
                o(s(n), "getEditorKey", void 0),
                o(s(n), "update", void 0),
                o(s(n), "onDragEnter", void 0),
                o(s(n), "onDragLeave", void 0),
                o(s(n), "_handleEditorContainerRef", function (e) {
                    (n.editorContainer = e), (n.editor = null !== e ? e.firstChild : null);
                }),
                o(s(n), "focus", function (e) {
                    var t = n.props.editorState,
                        r = t.getSelection().getHasFocus(),
                        i = n.editor;
                    if (i) {
                        var a = O.getScrollParent(i),
                            s = e || T(a),
                            o = s.x,
                            l = s.y;
                        R(i) || N(!1),
                            i.focus(),
                            a === window ? window.scrollTo(o, l) : y.setTop(a, l),
                            r || n.update(E.forceSelection(t, t.getSelection()));
                    }
                }),
                o(s(n), "blur", function () {
                    var e = n.editor;
                    e && (R(e) || N(!1), e.blur());
                }),
                o(s(n), "setMode", function (e) {
                    var t = n.props,
                        r = t.onPaste,
                        i = t.onCut,
                        s = t.onCopy,
                        o = a({}, x.edit);
                    r && (o.onPaste = r),
                        i && (o.onCut = i),
                        s && (o.onCopy = s),
                        (n._handler = a({}, x, { edit: o })[e]);
                }),
                o(s(n), "exitCurrentMode", function () {
                    n.setMode("edit");
                }),
                o(s(n), "restoreEditorDOM", function (e) {
                    n.setState({ contentsKey: n.state.contentsKey + 1 }, function () {
                        n.focus(e);
                    });
                }),
                o(s(n), "setClipboard", function (e) {
                    n._clipboard = e;
                }),
                o(s(n), "getClipboard", function () {
                    return n._clipboard;
                }),
                o(s(n), "update", function (e) {
                    (n._latestEditorState = e), n.props.onChange(e);
                }),
                o(s(n), "onDragEnter", function () {
                    n._dragCount++;
                }),
                o(s(n), "onDragLeave", function () {
                    n._dragCount--, 0 === n._dragCount && n.exitCurrentMode();
                }),
                (n._blockSelectEvents = !1),
                (n._clipboard = null),
                (n._handler = null),
                (n._dragCount = 0),
                (n._editorKey = t.editorKey || S()),
                (n._placeholderAccessibilityID = "placeholder-" + n._editorKey),
                (n._latestEditorState = t.editorState),
                (n._latestCommittedEditorState = t.editorState),
                (n._onBeforeInput = n._buildHandler("onBeforeInput")),
                (n._onBlur = n._buildHandler("onBlur")),
                (n._onCharacterData = n._buildHandler("onCharacterData")),
                (n._onCompositionEnd = n._buildHandler("onCompositionEnd")),
                (n._onCompositionStart = n._buildHandler("onCompositionStart")),
                (n._onCopy = n._buildHandler("onCopy")),
                (n._onCut = n._buildHandler("onCut")),
                (n._onDragEnd = n._buildHandler("onDragEnd")),
                (n._onDragOver = n._buildHandler("onDragOver")),
                (n._onDragStart = n._buildHandler("onDragStart")),
                (n._onDrop = n._buildHandler("onDrop")),
                (n._onInput = n._buildHandler("onInput")),
                (n._onFocus = n._buildHandler("onFocus")),
                (n._onKeyDown = n._buildHandler("onKeyDown")),
                (n._onKeyPress = n._buildHandler("onKeyPress")),
                (n._onKeyUp = n._buildHandler("onKeyUp")),
                (n._onMouseDown = n._buildHandler("onMouseDown")),
                (n._onMouseUp = n._buildHandler("onMouseUp")),
                (n._onPaste = n._buildHandler("onPaste")),
                (n._onSelect = n._buildHandler("onSelect")),
                (n.getEditorKey = function () {
                    return n._editorKey;
                }),
                (n.state = { contentsKey: 0 }),
                n
            );
        }
        l(t, e);
        var r = t.prototype;
        return (
            (r._buildHandler = function (e) {
                var t = this;
                return function (n) {
                    if (!t.props.readOnly) {
                        var r = t._handler && t._handler[e];
                        r &&
                            (h
                                ? h(function () {
                                      return r(t, n);
                                  })
                                : r(t, n));
                    }
                };
            }),
            (r._showPlaceholder = function () {
                return (
                    !!this.props.placeholder &&
                    !this.props.editorState.isInCompositionMode() &&
                    !this.props.editorState.getCurrentContent().hasText()
                );
            }),
            (r._renderPlaceholder = function () {
                if (this._showPlaceholder()) {
                    var e = {
                        text: w(this.props.placeholder),
                        editorState: this.props.editorState,
                        textAlignment: this.props.textAlignment,
                        accessibilityID: this._placeholderAccessibilityID,
                    };
                    return b.createElement(m, e);
                }
                return null;
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    s = e.customStyleFn,
                    o = e.customStyleMap,
                    l = e.editorState,
                    c = e.preventScroll,
                    d = e.readOnly,
                    p = e.textAlignment,
                    _ = e.textDirectionality,
                    h = v({
                        "DraftEditor/root": !0,
                        "DraftEditor/alignLeft": "left" === p,
                        "DraftEditor/alignRight": "right" === p,
                        "DraftEditor/alignCenter": "center" === p,
                    }),
                    m = {
                        outline: "none",
                        userSelect: "text",
                        WebkitUserSelect: "text",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                    },
                    g = this.props.role || "textbox",
                    E = "combobox" === g ? !!this.props.ariaExpanded : null,
                    y = {
                        blockRenderMap: t,
                        blockRendererFn: n,
                        blockStyleFn: r,
                        customStyleMap: a({}, u, o),
                        customStyleFn: s,
                        editorKey: this._editorKey,
                        editorState: l,
                        preventScroll: c,
                        textDirectionality: _,
                    };
                return b.createElement(
                    "div",
                    { className: h },
                    this._renderPlaceholder(),
                    b.createElement(
                        "div",
                        {
                            className: v("DraftEditor/editorContainer"),
                            ref: this._handleEditorContainerRef,
                        },
                        b.createElement(
                            "div",
                            {
                                "aria-activedescendant": d ? null : this.props.ariaActiveDescendantID,
                                "aria-autocomplete": d ? null : this.props.ariaAutoComplete,
                                "aria-controls": d ? null : this.props.ariaControls,
                                "aria-describedby": this.props.ariaDescribedBy || this._placeholderAccessibilityID,
                                "aria-expanded": d ? null : E,
                                "aria-label": this.props.ariaLabel,
                                "aria-labelledby": this.props.ariaLabelledBy,
                                "aria-multiline": this.props.ariaMultiline,
                                "aria-owns": d ? null : this.props.ariaOwneeID,
                                autoCapitalize: this.props.autoCapitalize,
                                autoComplete: this.props.autoComplete,
                                autoCorrect: this.props.autoCorrect,
                                className: v({
                                    notranslate: !d,
                                    "public/DraftEditor/content": !0,
                                }),
                                contentEditable: !d,
                                "data-testid": this.props.webDriverTestID,
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
                                role: d ? null : g,
                                spellCheck: D && this.props.spellCheck,
                                style: m,
                                suppressContentEditableWarning: !0,
                                tabIndex: this.props.tabIndex,
                            },
                            b.createElement(j, {
                                editor: this,
                                editorState: l,
                            }),
                            b.createElement(f, i({}, y, { key: "contents" + this.state.contentsKey })),
                        ),
                    ),
                );
            }),
            (r.componentDidMount = function () {
                (this._blockSelectEvents = !1),
                    !L && C("draft_ods_enabled") && ((L = !0), g.initODS()),
                    this.setMode("edit"),
                    P &&
                        (this.editor
                            ? this.editor.ownerDocument.execCommand("AutoUrlDetect", !1, !1)
                            : n.g.execCommand("AutoUrlDetect", !1, !1));
            }),
            (r.componentDidUpdate = function () {
                (this._blockSelectEvents = !1),
                    (this._latestEditorState = this.props.editorState),
                    (this._latestCommittedEditorState = this.props.editorState);
            }),
            t
        );
    })(b.Component);
o(M, "defaultProps", {
    blockRenderMap: c,
    blockRendererFn: function () {
        return null;
    },
    blockStyleFn: function () {
        return "";
    },
    keyBindingFn: I,
    readOnly: !1,
    spellCheck: !1,
    stripPastedStyles: !1,
}),
    (e.exports = M);
