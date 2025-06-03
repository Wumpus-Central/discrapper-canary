n.d(t, {
    AF: () => j,
    oL: () => O,
    xH: () => v
}),
    n(388685),
    n(781311);
var i = n(255367),
    r = n(73800),
    o = n(512722),
    l = n.n(o),
    s = n(362383),
    a = n(731965),
    c = n(430742),
    u = n(752305),
    d = n(592125),
    h = n(703558),
    p = n(883429),
    f = n(228392);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class g {
    constructor(e, t, n) {
        var i, r, o;
        m(this, 'channelId', void 0),
            m(this, '_set', void 0),
            m(this, 'get', void 0),
            m(this, 'editorHeight', void 0),
            m(this, 'editorAdditionRowHeight', void 0),
            m(this, 'listViewCardHeights', void 0),
            m(this, 'cardHeightVersion', void 0),
            m(this, 'nameError', void 0),
            m(this, 'messageError', void 0),
            m(this, 'appliedTags', void 0),
            m(this, 'popoutOpen', void 0),
            m(this, 'guidelinesOpen', void 0),
            m(this, 'previewing', void 0),
            m(this, 'onboardingExpanded', void 0),
            m(this, 'submitting', void 0),
            m(this, 'formOpen', void 0),
            m(this, 'name', void 0),
            m(this, 'textAreaState', void 0),
            m(this, 'hasClickedForm', void 0),
            m(this, 'titleFocused', void 0),
            m(this, 'bodyFocused', void 0),
            m(this, 'set', void 0),
            m(this, 'setEditorHeight', void 0),
            m(this, 'setEditorAdditionRowHeight', void 0),
            m(this, 'setCardHeight', void 0),
            m(this, 'setNameError', void 0),
            m(this, 'setMessageError', void 0),
            m(this, 'toggleAppliedTag', void 0),
            m(this, 'setPopoutOpen', void 0),
            m(this, 'setGuidelinesOpen', void 0),
            m(this, 'setPreviewing', void 0),
            m(this, 'setSubmitting', void 0),
            m(this, 'setFormOpen', void 0),
            m(this, 'setOnboardingExpanded', void 0),
            m(this, 'setTitleFocused', void 0),
            m(this, 'setBodyFocused', void 0),
            m(this, 'setName', void 0),
            m(this, 'setTextAreaState', void 0),
            m(this, 'setHasClickedForm', void 0),
            m(this, 'resetFormState', void 0),
            m(this, 'setFormOpenFromUserAction', void 0),
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
            (this.name = ''),
            (this.textAreaState = (0, u.eK)('')),
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
                (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({ appliedTags: t }), c.Z.changeThreadSettings(this.channelId, { appliedTags: t });
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
                this.set({ name: e }), c.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), c.Z.saveDraft(this.channelId, e.textValue, h.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = d.Z.getChannel(this.channelId),
                    t = null == e || null == e.template ? '' : e.template.trim();
                this.set({
                    name: '',
                    textAreaState: (0, u.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1
                }),
                    p.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = d.Z.getChannel(this.channelId);
                null != e &&
                    (0, f.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0
                    }),
                    p.Z.clearForumSearch(this.channelId);
            });
        let l = d.Z.getChannel(e);
        if (null == l) return;
        let s = null != (i = h.Z.getThreadSettings(l.id)) ? i : {},
            g = null == l.template ? '' : l.template.trim(),
            b = h.Z.getDraft(l.id, h.d.FirstThreadMessage),
            O = (0, u.eK)(null != b && '' !== b.trim() ? b : g);
        (this.name = null != (r = s.name) ? r : ''), (o = new Set(s.appliedTags)), (this.appliedTags = void 0 !== o ? o : new Set()), (this.formOpen = this.name.length > 0), (this.textAreaState = O);
    }
}
let b = r.createContext(null);
function O(e) {
    let { children: t, channel: n } = e,
        o = r.useMemo(() => (0, s.F)((e, t) => new g(n.id, e, t)), [n]);
    return (0, i.jsx)(b.Provider, {
        value: o,
        children: t
    });
}
function v(e, t) {
    let n = r.useContext(b);
    return l()(null != n, '[useForumPostComposerStore] Context should not be null'), n(e, t);
}
function j() {
    let e = r.useContext(b);
    return l()(null != e, '[useForumPostComposerStore] Context should not be null'), e;
}
