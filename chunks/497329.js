n.d(t, { C: () => r });
class r {
    static generateSessionId() {
        return `discord-video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}
