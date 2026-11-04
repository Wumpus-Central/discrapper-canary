i.d(
    e,
    {},
    {
        C: class {
            static generateSessionId() {
                return `discord-video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            }
        },
    },
);
