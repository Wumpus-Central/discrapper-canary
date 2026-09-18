n.d(t, { k: () => i });
class i {
    id;
    gameId;
    startedAt;
    endedAt = null;
    savedClipIds = [];
    candidateClipsById = new Map();
    manualClipsSavedCount = 0;
    candidateClipsSavedCount = 0;
    candidateClipsPromotedCount = 0;
    constructor(e, t, n = performance.now()) {
        ((this.id = e), (this.gameId = t), (this.startedAt = n));
    }
    get clipIds() {
        return this.savedClipIds;
    }
    get candidates() {
        return [...this.candidateClipsById.values()];
    }
    get isActive() {
        return null == this.endedAt;
    }
    get hasClips() {
        return this.savedClipIds.length > 0;
    }
    get manualClipsSaved() {
        return this.manualClipsSavedCount;
    }
    get candidateClipsSaved() {
        return this.candidateClipsSavedCount;
    }
    get candidateClipsPromoted() {
        return this.candidateClipsPromotedCount;
    }
    recordSavedClip(e) {
        if (("manual" === e.clipMethod && (this.manualClipsSavedCount += 1), !0 === e.isCandidate)) {
            ((this.candidateClipsSavedCount += 1), this.candidateClipsById.set(e.id, e));
            return;
        }
        this.savedClipIds = [...this.savedClipIds, e.id];
    }
    recordPromotedClip(e) {
        ((this.candidateClipsPromotedCount += 1),
            this.removeCandidate(e.id),
            (this.savedClipIds = [...this.savedClipIds, e.id]));
    }
    removeCandidate(e) {
        this.candidateClipsById.delete(e);
    }
    getCandidate(e) {
        return this.candidateClipsById.get(e);
    }
    updateCandidate(e) {
        this.candidateClipsById.has(e.id) && this.candidateClipsById.set(e.id, e);
    }
    recordMontageClip(e) {
        this.savedClipIds = [...this.savedClipIds, e.id];
    }
    end() {
        this.endedAt ??= performance.now();
    }
}
