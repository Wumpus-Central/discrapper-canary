var r = n(381538);
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function o(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function s(e, t, n) {
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
var c = n(329554),
    u = n(613990),
    d = n(229450),
    f = n(410937),
    p = n(493807),
    _ = n(529742),
    m = n(36706),
    h = n(753294),
    g = n(833866),
    E = n(384404),
    b = n(473749),
    y = n(1231),
    O = n(292489),
    v = n(169774),
    S = n(606166),
    I = n(703579),
    T = n(797487),
    C = n(685536),
    A = n(40375),
    N = n(581079),
    P = n(207303),
    R = n(467159),
    w = v.isBrowser("IE"),
    D = !w,
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
                s(o((n = e.call(this, t) || this)), "_blockSelectEvents", void 0),
                s(o(n), "_clipboard", void 0),
                s(o(n), "_handler", void 0),
                s(o(n), "_dragCount", void 0),
                s(o(n), "_internalDrag", void 0),
                s(o(n), "_editorKey", void 0),
                s(o(n), "_placeholderAccessibilityID", void 0),
                s(o(n), "_latestEditorState", void 0),
                s(o(n), "_latestCommittedEditorState", void 0),
                s(o(n), "_pendingStateFromBeforeInput", void 0),
                s(o(n), "_onBeforeInput", void 0),
                s(o(n), "_onBlur", void 0),
                s(o(n), "_onCharacterData", void 0),
                s(o(n), "_onCompositionEnd", void 0),
                s(o(n), "_onCompositionStart", void 0),
                s(o(n), "_onCopy", void 0),
                s(o(n), "_onCut", void 0),
                s(o(n), "_onDragEnd", void 0),
                s(o(n), "_onDragOver", void 0),
                s(o(n), "_onDragStart", void 0),
                s(o(n), "_onDrop", void 0),
                s(o(n), "_onInput", void 0),
                s(o(n), "_onFocus", void 0),
                s(o(n), "_onKeyDown", void 0),
                s(o(n), "_onKeyPress", void 0),
                s(o(n), "_onKeyUp", void 0),
                s(o(n), "_onMouseDown", void 0),
                s(o(n), "_onMouseUp", void 0),
                s(o(n), "_onPaste", void 0),
                s(o(n), "_onSelect", void 0),
                s(o(n), "editor", void 0),
                s(o(n), "editorContainer", void 0),
                s(o(n), "focus", void 0),
                s(o(n), "blur", void 0),
                s(o(n), "setMode", void 0),
                s(o(n), "exitCurrentMode", void 0),
                s(o(n), "restoreEditorDOM", void 0),
                s(o(n), "setClipboard", void 0),
                s(o(n), "getClipboard", void 0),
                s(o(n), "getEditorKey", void 0),
                s(o(n), "update", void 0),
                s(o(n), "onDragEnter", void 0),
                s(o(n), "onDragLeave", void 0),
                s(o(n), "_handleEditorContainerRef", function (e) {
                    (n.editorContainer = e), (n.editor = null !== e ? e.firstChild : null);
                }),
                s(o(n), "focus", function (e) {
                    var t = n.props.editorState,
                        r = t.getSelection().getHasFocus(),
                        i = n.editor;
                    if (i) {
                        var a = O.getScrollParent(i),
                            o = e || C(a),
                            s = o.x,
                            l = o.y;
                        P(i) || N(!1),
                            i.focus(),
                            a === window ? window.scrollTo(s, l) : y.setTop(a, l),
                            r || n.update(E.forceSelection(t, t.getSelection()));
                    }
                }),
                s(o(n), "blur", function () {
                    var e = n.editor;
                    e && (P(e) || N(!1), e.blur());
                }),
                s(o(n), "setMode", function (e) {
                    var t = n.props,
                        r = t.onPaste,
                        i = t.onCut,
                        o = t.onCopy,
                        s = a({}, x.edit);
                    r && (s.onPaste = r),
                        i && (s.onCut = i),
                        o && (s.onCopy = o),
                        (n._handler = a({}, x, { edit: s })[e]);
                }),
                s(o(n), "exitCurrentMode", function () {
                    n.setMode("edit");
                }),
                s(o(n), "restoreEditorDOM", function (e) {
                    n.setState({ contentsKey: n.state.contentsKey + 1 }, function () {
                        n.focus(e);
                    });
                }),
                s(o(n), "setClipboard", function (e) {
                    n._clipboard = e;
                }),
                s(o(n), "getClipboard", function () {
                    return n._clipboard;
                }),
                s(o(n), "update", function (e) {
                    (n._latestEditorState = e), n.props.onChange(e);
                }),
                s(o(n), "onDragEnter", function () {
                    n._dragCount++;
                }),
                s(o(n), "onDragLeave", function () {
                    n._dragCount--, 0 === n._dragCount && n.exitCurrentMode();
                }),
                (n._blockSelectEvents = !1),
                (n._clipboard = null),
                (n._handler = null),
                (n._dragCount = 0),
                (n._editorKey = t.editorKey || I()),
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
                            (m
                                ? m(function () {
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
                        text: R(this.props.placeholder),
                        editorState: this.props.editorState,
                        textAlignment: this.props.textAlignment,
                        accessibilityID: this._placeholderAccessibilityID,
                    };
                    return b.createElement(h, e);
                }
                return null;
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    o = e.customStyleFn,
                    s = e.customStyleMap,
                    l = e.editorState,
                    c = e.preventScroll,
                    d = e.readOnly,
                    p = e.textAlignment,
                    _ = e.textDirectionality,
                    m = S({
                        "DraftEditor/root": !0,
                        "DraftEditor/alignLeft": "left" === p,
                        "DraftEditor/alignRight": "right" === p,
                        "DraftEditor/alignCenter": "center" === p,
                    }),
                    h = {
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
                        customStyleMap: a({}, u, s),
                        customStyleFn: o,
                        editorKey: this._editorKey,
                        editorState: l,
                        preventScroll: c,
                        textDirectionality: _,
                    };
                return b.createElement(
                    "div",
                    { className: m },
                    this._renderPlaceholder(),
                    b.createElement(
                        "div",
                        {
                            className: S("DraftEditor/editorContainer"),
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
                                className: S({
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
                                style: h,
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
                    !L && A("draft_ods_enabled") && ((L = !0), g.initODS()),
                    this.setMode("edit"),
                    w &&
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
s(M, "defaultProps", {
    blockRenderMap: c,
    blockRendererFn: function () {
        return null;
    },
    blockStyleFn: function () {
        return "";
    },
    keyBindingFn: T,
    readOnly: !1,
    spellCheck: !1,
    stripPastedStyles: !1,
}),
    (e.exports = M);
