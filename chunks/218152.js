s.d(t, { Cp: () => f, ST: () => C, kU: () => p });
var n = s(627968),
    l = s(64700),
    a = s(284009),
    i = s.n(a),
    r = s(265690),
    o = s(121894),
    d = s(465532),
    c = s(408018),
    u = s(734057),
    h = s(31717),
    m = s(919577),
    g = s(853742);
class x {
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
    textAreaState = (0, c.ur)("");
    hasClickedForm = !1;
    titleFocused = !1;
    bodyFocused = !1;
    constructor(e, t, s) {
        (this.channelId = e), (this._set = t), (this.get = s);
        const n = u.A.getChannel(e);
        if (null == n) return;
        const l = h.A.getThreadSettings(n.id) ?? {},
            a = null == n.template ? "" : n.template.trim(),
            i = h.A.getDraft(n.id, h.C.FirstThreadMessage),
            r = (0, c.ur)(null != i && "" !== i.trim() ? i : a);
        (this.name = l.name ?? ""),
            (this.appliedTags = new Set(l.appliedTags) ?? new Set()),
            (this.textAreaState = r),
            (this.formOpen = r.textValue !== a);
    }
    set = (e) => {
        (0, o.r)(() => this._set(e));
    };
    setEditorHeight = (e) => {
        this.set({ editorHeight: e });
    };
    setEditorAdditionRowHeight = (e) => {
        this.set({ editorAdditionRowHeight: e });
    };
    setCardHeight = (e, t) => {
        let { listViewCardHeights: s, cardHeightVersion: n } = this.get();
        s[e] !== t && ((s[e] = t), this.set({ cardHeightVersion: n + 1 }));
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
            d.A.changeThreadSettings(this.channelId, { appliedTags: t });
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
        this.set({ formOpen: e }), m.A.clearForumSearch(this.channelId);
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
        this.set({ name: e }), d.A.changeThreadSettings(this.channelId, { name: e });
    };
    setTextAreaState = (e) => {
        this.set({ textAreaState: e }), d.A.saveDraft(this.channelId, e.textValue, h.C.FirstThreadMessage);
    };
    setHasClickedForm = (e) => {
        this.set({ hasClickedForm: e });
    };
    resetFormState = () => {
        let e = u.A.getChannel(this.channelId),
            t = null == e || null == e.template ? "" : e.template.trim();
        this.set({ name: "", textAreaState: (0, c.ur)(t), appliedTags: new Set(), hasClickedForm: !1 }),
            m.A.clearForumSearch(this.channelId);
    };
    setFormOpenFromUserAction = () => {
        if (this.hasClickedForm) return;
        let e = u.A.getChannel(this.channelId);
        null != e && (0, g.OG)({ guildId: e.guild_id, channelId: this.channelId }),
            this.set({ hasClickedForm: !0, formOpen: !0 }),
            m.A.clearForumSearch(this.channelId);
    };
}
let A = l.createContext(null);
function f(e) {
    let { children: t, channel: s } = e,
        a = l.useMemo(() => (0, r.h)((e, t) => new x(s.id, e, t)), [s]);
    return (0, n.jsx)(A.Provider, { value: a, children: t });
}
function p(e, t) {
    let s = l.useContext(A);
    return i()(null != s, "[useForumPostComposerStore] Context should not be null"), s(e, t);
}
function C() {
    let e = l.useContext(A);
    return i()(null != e, "[useForumPostComposerStore] Context should not be null"), e;
}
