n.d(t, {
    Cp: () => b,
    ST: () => O,
    kU: () => A,
}),
    n(896048),
    n(733351);
var i = n(627968),
    s = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(265690),
    o = n(121894),
    c = n(465532),
    d = n(408018),
    u = n(734057),
    h = n(31717),
    g = n(919577),
    m = n(853742);
function p(e, t, n) {
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
class f {
    constructor(e, t, n) {
        var i, s, r;
        p(this, "channelId", void 0),
            p(this, "_set", void 0),
            p(this, "get", void 0),
            p(this, "editorHeight", void 0),
            p(this, "editorAdditionRowHeight", void 0),
            p(this, "listViewCardHeights", void 0),
            p(this, "cardHeightVersion", void 0),
            p(this, "nameError", void 0),
            p(this, "messageError", void 0),
            p(this, "appliedTags", void 0),
            p(this, "popoutOpen", void 0),
            p(this, "guidelinesOpen", void 0),
            p(this, "previewing", void 0),
            p(this, "onboardingExpanded", void 0),
            p(this, "submitting", void 0),
            p(this, "formOpen", void 0),
            p(this, "name", void 0),
            p(this, "textAreaState", void 0),
            p(this, "hasClickedForm", void 0),
            p(this, "titleFocused", void 0),
            p(this, "bodyFocused", void 0),
            p(this, "set", void 0),
            p(this, "setEditorHeight", void 0),
            p(this, "setEditorAdditionRowHeight", void 0),
            p(this, "setCardHeight", void 0),
            p(this, "setNameError", void 0),
            p(this, "setMessageError", void 0),
            p(this, "toggleAppliedTag", void 0),
            p(this, "setPopoutOpen", void 0),
            p(this, "setGuidelinesOpen", void 0),
            p(this, "setPreviewing", void 0),
            p(this, "setSubmitting", void 0),
            p(this, "setFormOpen", void 0),
            p(this, "setOnboardingExpanded", void 0),
            p(this, "setTitleFocused", void 0),
            p(this, "setBodyFocused", void 0),
            p(this, "setName", void 0),
            p(this, "setTextAreaState", void 0),
            p(this, "setHasClickedForm", void 0),
            p(this, "resetFormState", void 0),
            p(this, "setFormOpenFromUserAction", void 0),
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
            (this.textAreaState = (0, d.ur)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
                (0, o.r)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: n, cardHeightVersion: i } = this.get();
                n[e] !== t && ((n[e] = t), this.set({ cardHeightVersion: i + 1 }));
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
                    c.A.changeThreadSettings(this.channelId, { appliedTags: t });
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
                this.set({ formOpen: e }), g.A.clearForumSearch(this.channelId);
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
                this.set({ name: e }), c.A.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), c.A.saveDraft(this.channelId, e.textValue, h.C.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = u.A.getChannel(this.channelId),
                    t = null == e || null == e.template ? "" : e.template.trim();
                this.set({
                    name: "",
                    textAreaState: (0, d.ur)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1,
                }),
                    g.A.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = u.A.getChannel(this.channelId);
                null != e &&
                    (0, m.OG)({
                        guildId: e.guild_id,
                        channelId: this.channelId,
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0,
                    }),
                    g.A.clearForumSearch(this.channelId);
            });
        const l = u.A.getChannel(e);
        if (null == l) return;
        const a = null != (i = h.A.getThreadSettings(l.id)) ? i : {},
            f = null == l.template ? "" : l.template.trim(),
            v = h.A.getDraft(l.id, h.C.FirstThreadMessage),
            b = (0, d.ur)(null != v && "" !== v.trim() ? v : f);
        (this.name = null != (s = a.name) ? s : ""),
            (r = new Set(a.appliedTags)),
            (this.appliedTags = void 0 !== r ? r : new Set()),
            (this.textAreaState = b),
            (this.formOpen = b.textValue !== f);
    }
}
let v = s.createContext(null);
function b(e) {
    let { children: t, channel: n } = e,
        r = s.useMemo(() => (0, a.h)((e, t) => new f(n.id, e, t)), [n]);
    return (0, i.jsx)(v.Provider, {
        value: r,
        children: t,
    });
}
function A(e, t) {
    let n = s.useContext(v);
    return l()(null != n, "[useForumPostComposerStore] Context should not be null"), n(e, t);
}
function O() {
    let e = s.useContext(v);
    return l()(null != e, "[useForumPostComposerStore] Context should not be null"), e;
}
