i.d(t, {
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
function m(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
class f {
    constructor(e, t, i) {
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
            (this.channelId = e),
            (this._set = t),
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
            (this.set = (e) => {
                (0, a.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: i, cardHeightVersion: n } = this.get();
                i[e] !== t && ((i[e] = t), this.set({ cardHeightVersion: n + 1 }));
            }),
            (this.setNameError = (e) => {
                this.set({ nameError: e });
            }),
            (this.setMessageError = (e) => {
                this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = (e) => {
                let { appliedTags: t } = this.get();
                (t = new Set(t)).has(e) ? t.delete(e) : t.add(e),
                    this.set({ appliedTags: t }),
                    d.Z.changeThreadSettings(this.channelId, { appliedTags: t });
            }),
            (this.setPopoutOpen = (e) => {
                this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = (e) => {
                this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = (e) => {
                this.set({ previewing: e });
            }),
            (this.setSubmitting = (e) => {
                this.set({ submitting: e });
            }),
            (this.setFormOpen = (e) => {
                this.set({ formOpen: e }), p.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (e) => {
                this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = (e) => {
                this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = (e) => {
                this.set({ bodyFocused: e });
            }),
            (this.setName = (e) => {
                this.set({ name: e }), d.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), d.Z.saveDraft(this.channelId, e.textValue, h.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = u.Z.getChannel(this.channelId),
                    t = null == e || null == e.template ? "" : e.template.trim();
                this.set({
                    name: "",
                    textAreaState: (0, c.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1,
                }),
                    p.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = u.Z.getChannel(this.channelId);
                null != e &&
                    (0, g.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId,
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0,
                    }),
                    p.Z.clearForumSearch(this.channelId);
            });
        let o = u.Z.getChannel(e);
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
function O(e) {
    let { children: t, channel: i } = e,
        s = r.useMemo(() => (0, l.F)((e, t) => new f(i.id, e, t)), [i]);
    return (0, n.jsx)(v.Provider, {
        value: s,
        children: t,
    });
}
function b(e, t) {
    let i = r.useContext(v);
    return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(e, t);
}
function y() {
    let e = r.useContext(v);
    return o()(null != e, "[useForumPostComposerStore] Context should not be null"), e;
}
