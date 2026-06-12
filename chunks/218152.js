s.d(t, { Cp: () => A, ST: () => x, kU: () => S });
var i = s(627968),
    n = s(64700),
    r = s(284009),
    a = s.n(r),
    h = s(265690),
    l = s(121894),
    o = s(465532),
    d = s(408018),
    u = s(734057),
    c = s(31717),
    g = s(522602),
    p = s(919577),
    m = s(853742);
class C {
    channelId;
    _set;
    get;
    editorHeight = 64;
    editorAdditionRowHeight = 0;
    listViewCardHeights = {};
    cardHeightVersion = 0;
    nameError = null;
    messageError = null;
    appliedTags = new Set();
    popoutOpen = !1;
    guidelinesOpen = !1;
    previewing = !1;
    onboardingExpanded = !1;
    submitting = !1;
    formOpen = !1;
    name = "";
    textAreaState = (0, d.ur)("");
    hasClickedForm = !1;
    titleFocused = !1;
    bodyFocused = !1;
    constructor(e, t, s) {
        (this.channelId = e), (this._set = t), (this.get = s);
        const i = u.A.getChannel(e);
        if (null == i) return;
        const n = c.A.getThreadSettings(i.id) ?? {},
            r = null == i.template ? "" : i.template.trim(),
            a = c.A.getDraft(i.id, c.C.FirstThreadMessage),
            h = (0, d.ur)(null != a && "" !== a.trim() ? a : r);
        (this.name = n.name ?? ""), (this.appliedTags = new Set(n.appliedTags) ?? new Set()), (this.textAreaState = h);
        const l = h.textValue !== r,
            o = g.A.getUploads(i.id, c.C.FirstThreadMessage).length > 0;
        (this.formOpen = l || o), this.formOpen && p.A.clearForumSearch(i.id);
    }
    set = (e) => {
        (0, l.r)(() => this._set(e));
    };
    setEditorHeight = (e) => {
        this.set({ editorHeight: e });
    };
    setEditorAdditionRowHeight = (e) => {
        this.set({ editorAdditionRowHeight: e });
    };
    setCardHeight = (e, t) => {
        let { listViewCardHeights: s, cardHeightVersion: i } = this.get();
        s[e] !== t && ((s[e] = t), this.set({ cardHeightVersion: i + 1 }));
    };
    setNameError = (e) => {
        this.set({ nameError: e });
    };
    setMessageError = (e) => {
        this.set({ messageError: e });
    };
    toggleAppliedTag = (e) => {
        let { appliedTags: t } = this.get();
        (t = new Set(t)).has(e) ? t.delete(e) : t.add(e),
            this.set({ appliedTags: t }),
            o.A.changeThreadSettings(this.channelId, { appliedTags: t });
    };
    setPopoutOpen = (e) => {
        this.set({ popoutOpen: e });
    };
    setGuidelinesOpen = (e) => {
        this.set({ guidelinesOpen: e });
    };
    setPreviewing = (e) => {
        this.set({ previewing: e });
    };
    setSubmitting = (e) => {
        this.set({ submitting: e });
    };
    setFormOpen = (e) => {
        this.set({ formOpen: e }), p.A.clearForumSearch(this.channelId);
    };
    setOnboardingExpanded = (e) => {
        this.set({ onboardingExpanded: e });
    };
    setTitleFocused = (e) => {
        this.set({ titleFocused: e });
    };
    setBodyFocused = (e) => {
        this.set({ bodyFocused: e });
    };
    setName = (e) => {
        this.set({ name: e }), o.A.changeThreadSettings(this.channelId, { name: e });
    };
    setTextAreaState = (e) => {
        this.set({ textAreaState: e }), o.A.saveDraft(this.channelId, e.textValue, c.C.FirstThreadMessage);
    };
    setHasClickedForm = (e) => {
        this.set({ hasClickedForm: e });
    };
    resetFormState = () => {
        let e = u.A.getChannel(this.channelId),
            t = null == e || null == e.template ? "" : e.template.trim();
        this.set({ name: "", textAreaState: (0, d.ur)(t), appliedTags: new Set(), hasClickedForm: !1 }),
            p.A.clearForumSearch(this.channelId);
    };
    setFormOpenFromUserAction = () => {
        if (this.hasClickedForm) return;
        let e = u.A.getChannel(this.channelId);
        null != e && (0, m.OG)({ guildId: e.guild_id, channelId: this.channelId }),
            this.set({ hasClickedForm: !0, formOpen: !0 }),
            p.A.clearForumSearch(this.channelId);
    };
}
let F = n.createContext(null);
function A(e) {
    let { children: t, channel: s } = e,
        r = n.useMemo(() => (0, h.h)((e, t) => new C(s.id, e, t)), [s]);
    return (0, i.jsx)(F.Provider, { value: r, children: t });
}
function S(e, t) {
    let s = n.useContext(F);
    return a()(null != s, "[useForumPostComposerStore] Context should not be null"), s(e, t);
}
function x() {
    let e = n.useContext(F);
    return a()(null != e, "[useForumPostComposerStore] Context should not be null"), e;
}
