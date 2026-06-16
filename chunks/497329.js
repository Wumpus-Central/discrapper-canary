i.d(e, { C: () => n });
class n {
    static generateSessionId() {
        return `discord-video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}
