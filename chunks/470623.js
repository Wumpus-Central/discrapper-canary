n.d(t, {
    AF: () => x,
    oL: () => y,
    xH: () => O,
}),
    n(388685),
    n(781311);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(748521),
    o = n(731965),
    c = n(430742),
    d = n(752305),
    u = n(592125),
    p = n(703558),
    h = n(883429),
    f = n(228392);
function g(e, t, n) {
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
class m {
    constructor(e, t, n) {
        var r, i, l;
        g(this, "channelId", void 0),
            g(this, "_set", void 0),
            g(this, "get", void 0),
            g(this, "editorHeight", void 0),
            g(this, "editorAdditionRowHeight", void 0),
            g(this, "listViewCardHeights", void 0),
            g(this, "cardHeightVersion", void 0),
            g(this, "nameError", void 0),
            g(this, "messageError", void 0),
            g(this, "appliedTags", void 0),
            g(this, "popoutOpen", void 0),
            g(this, "guidelinesOpen", void 0),
            g(this, "previewing", void 0),
            g(this, "onboardingExpanded", void 0),
            g(this, "submitting", void 0),
            g(this, "formOpen", void 0),
            g(this, "name", void 0),
            g(this, "textAreaState", void 0),
            g(this, "hasClickedForm", void 0),
            g(this, "titleFocused", void 0),
            g(this, "bodyFocused", void 0),
            g(this, "set", void 0),
            g(this, "setEditorHeight", void 0),
            g(this, "setEditorAdditionRowHeight", void 0),
            g(this, "setCardHeight", void 0),
            g(this, "setNameError", void 0),
            g(this, "setMessageError", void 0),
            g(this, "toggleAppliedTag", void 0),
            g(this, "setPopoutOpen", void 0),
            g(this, "setGuidelinesOpen", void 0),
            g(this, "setPreviewing", void 0),
            g(this, "setSubmitting", void 0),
            g(this, "setFormOpen", void 0),
            g(this, "setOnboardingExpanded", void 0),
            g(this, "setTitleFocused", void 0),
            g(this, "setBodyFocused", void 0),
            g(this, "setName", void 0),
            g(this, "setTextAreaState", void 0),
            g(this, "setHasClickedForm", void 0),
            g(this, "resetFormState", void 0),
            g(this, "setFormOpenFromUserAction", void 0),
            (this.channelId = e),
            (this._set = t),
            (this.get = n),
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
            (this.textAreaState = (0, d.eK)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
                (0, o.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: n, cardHeightVersion: r } = this.get();
                n[e] !== t && ((n[e] = t), this.set({ cardHeightVersion: r + 1 }));
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
                    c.Z.changeThreadSettings(this.channelId, { appliedTags: t });
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
                this.set({ formOpen: e }), h.Z.clearForumSearch(this.channelId);
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
                this.set({ name: e }), c.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), c.Z.saveDraft(this.channelId, e.textValue, p.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = u.Z.getChannel(this.channelId),
                    t = null == e || null == e.template ? "" : e.template.trim();
                this.set({
                    name: "",
                    textAreaState: (0, d.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1,
                }),
                    h.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = u.Z.getChannel(this.channelId);
                null != e &&
                    (0, f.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId,
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0,
                    }),
                    h.Z.clearForumSearch(this.channelId);
            });
        let a = u.Z.getChannel(e);
        if (null == a) return;
        let s = null != (r = p.Z.getThreadSettings(a.id)) ? r : {},
            m = null == a.template ? "" : a.template.trim(),
            b = p.Z.getDraft(a.id, p.d.FirstThreadMessage),
            y = (0, d.eK)(null != b && "" !== b.trim() ? b : m);
        (this.name = null != (i = s.name) ? i : ""),
            (l = new Set(s.appliedTags)),
            (this.appliedTags = void 0 !== l ? l : new Set()),
            (this.textAreaState = y),
            (this.formOpen = y.textValue !== m);
    }
}
let b = i.createContext(null);
function y(e) {
    let { children: t, channel: n } = e,
        l = i.useMemo(() => (0, s.F)((e, t) => new m(n.id, e, t)), [n]);
    return (0, r.jsx)(b.Provider, {
        value: l,
        children: t,
    });
}
function O(e, t) {
    let n = i.useContext(b);
    return a()(null != n, "[useForumPostComposerStore] Context should not be null"), n(e, t);
}
function x() {
    let e = i.useContext(b);
    return a()(null != e, "[useForumPostComposerStore] Context should not be null"), e;
}
