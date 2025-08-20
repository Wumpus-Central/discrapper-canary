i.d(e, {
    AF: () => y,
    oL: () => O,
    xH: () => b,
}),
    i(388685),
    i(781311);
var n = i(951288),
    r = i(647438),
    s = i(512722),
    o = i.n(s),
    l = i(131193),
    a = i(731965),
    d = i(430742),
    c = i(752305),
    u = i(592125),
    h = i(703558),
    p = i(883429),
    g = i(228392);
function m(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
class f {
    constructor(t, e, i) {
        var n, r, s;
        m(this, "channelId", void 0),
            m(this, "_set", void 0),
            m(this, "get", void 0),
            m(this, "editorHeight", void 0),
            m(this, "editorAdditionRowHeight", void 0),
            m(this, "listViewCardHeights", void 0),
            m(this, "cardHeightVersion", void 0),
            m(this, "nameError", void 0),
            m(this, "messageError", void 0),
            m(this, "appliedTags", void 0),
            m(this, "popoutOpen", void 0),
            m(this, "guidelinesOpen", void 0),
            m(this, "previewing", void 0),
            m(this, "onboardingExpanded", void 0),
            m(this, "submitting", void 0),
            m(this, "formOpen", void 0),
            m(this, "name", void 0),
            m(this, "textAreaState", void 0),
            m(this, "hasClickedForm", void 0),
            m(this, "titleFocused", void 0),
            m(this, "bodyFocused", void 0),
            m(this, "set", void 0),
            m(this, "setEditorHeight", void 0),
            m(this, "setEditorAdditionRowHeight", void 0),
            m(this, "setCardHeight", void 0),
            m(this, "setNameError", void 0),
            m(this, "setMessageError", void 0),
            m(this, "toggleAppliedTag", void 0),
            m(this, "setPopoutOpen", void 0),
            m(this, "setGuidelinesOpen", void 0),
            m(this, "setPreviewing", void 0),
            m(this, "setSubmitting", void 0),
            m(this, "setFormOpen", void 0),
            m(this, "setOnboardingExpanded", void 0),
            m(this, "setTitleFocused", void 0),
            m(this, "setBodyFocused", void 0),
            m(this, "setName", void 0),
            m(this, "setTextAreaState", void 0),
            m(this, "setHasClickedForm", void 0),
            m(this, "resetFormState", void 0),
            m(this, "setFormOpenFromUserAction", void 0),
            (this.channelId = t),
            (this._set = e),
            (this.get = i),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ""),
            (this.textAreaState = (0, c.eK)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (t) => {
                (0, a.j)(() => this._set(t));
            }),
            (this.setEditorHeight = (t) => {
                this.set({ editorHeight: t });
            }),
            (this.setEditorAdditionRowHeight = (t) => {
                this.set({ editorAdditionRowHeight: t });
            }),
            (this.setCardHeight = (t, e) => {
                let { listViewCardHeights: i, cardHeightVersion: n } = this.get();
                i[t] !== e && ((i[t] = e), this.set({ cardHeightVersion: n + 1 }));
            }),
            (this.setNameError = (t) => {
                this.set({ nameError: t });
            }),
            (this.setMessageError = (t) => {
                this.set({ messageError: t });
            }),
            (this.toggleAppliedTag = (t) => {
                let { appliedTags: e } = this.get();
                (e = new Set(e)).has(t) ? e.delete(t) : e.add(t),
                    this.set({ appliedTags: e }),
                    d.Z.changeThreadSettings(this.channelId, { appliedTags: e });
            }),
            (this.setPopoutOpen = (t) => {
                this.set({ popoutOpen: t });
            }),
            (this.setGuidelinesOpen = (t) => {
                this.set({ guidelinesOpen: t });
            }),
            (this.setPreviewing = (t) => {
                this.set({ previewing: t });
            }),
            (this.setSubmitting = (t) => {
                this.set({ submitting: t });
            }),
            (this.setFormOpen = (t) => {
                this.set({ formOpen: t }), p.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (t) => {
                this.set({ onboardingExpanded: t });
            }),
            (this.setTitleFocused = (t) => {
                this.set({ titleFocused: t });
            }),
            (this.setBodyFocused = (t) => {
                this.set({ bodyFocused: t });
            }),
            (this.setName = (t) => {
                this.set({ name: t }), d.Z.changeThreadSettings(this.channelId, { name: t });
            }),
            (this.setTextAreaState = (t) => {
                this.set({ textAreaState: t }), d.Z.saveDraft(this.channelId, t.textValue, h.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (t) => {
                this.set({ hasClickedForm: t });
            }),
            (this.resetFormState = () => {
                let t = u.Z.getChannel(this.channelId),
                    e = null == t || null == t.template ? "" : t.template.trim();
                this.set({
                    name: "",
                    textAreaState: (0, c.eK)(e),
                    appliedTags: new Set(),
                    hasClickedForm: !1,
                }),
                    p.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let t = u.Z.getChannel(this.channelId);
                null != t &&
                    (0, g.HR)({
                        guildId: t.guild_id,
                        channelId: this.channelId,
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0,
                    }),
                    p.Z.clearForumSearch(this.channelId);
            });
        let o = u.Z.getChannel(t);
        if (null == o) return;
        let l = null != (n = h.Z.getThreadSettings(o.id)) ? n : {},
            f = null == o.template ? "" : o.template.trim(),
            v = h.Z.getDraft(o.id, h.d.FirstThreadMessage),
            O = (0, c.eK)(null != v && "" !== v.trim() ? v : f);
        (this.name = null != (r = l.name) ? r : ""),
            (s = new Set(l.appliedTags)),
            (this.appliedTags = void 0 !== s ? s : new Set()),
            (this.formOpen = this.name.length > 0 && O.textValue.length > 0),
            (this.textAreaState = O);
    }
}
let v = r.createContext(null);
function O(t) {
    let { children: e, channel: i } = t,
        s = r.useMemo(() => (0, l.F)((t, e) => new f(i.id, t, e)), [i]);
    return (0, n.jsx)(v.Provider, {
        value: s,
        children: e,
    });
}
function b(t, e) {
    let i = r.useContext(v);
    return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e);
}
function y() {
    let t = r.useContext(v);
    return o()(null != t, "[useForumPostComposerStore] Context should not be null"), t;
}
